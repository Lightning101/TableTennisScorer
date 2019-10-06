import { Component, OnInit } from '@angular/core';
import { Match } from '../class/match';
import { Player } from '../class/player';
import { HttpClient } from '@angular/common/http';
import { Set } from '../class/set';
import { ScoreService } from '../services/score.service';

@Component({
  selector: 'app-score-board-controller',
  templateUrl: './score-board-controller.component.html',
  styleUrls: ['./score-board-controller.component.scss']
})
export class ScoreBoardControllerComponent implements OnInit {

  private match: Match = new Match([new Player('Player One'), new Player('Player Two')]);

  constructor(private http: HttpClient,
              private scoreService: ScoreService) {

  }

  ngOnInit() {

    this.match.addSet(new Set());
    this.match.getCurrentSet().setWinner(this.match.getPlayerOne().getName());
    this.match.getSets();

    this.http.get('/match/').subscribe((match: any) => {
      this.setupMatch(match);
     });


    this.http.get('/match/').subscribe((match: any) => {
      this.setupMatch(match);
      });


    this.scoreService.getPlayerOneScoreSubject().subscribe(p1s => {
      this.match.getCurrentSet().p1Score = p1s;
    });

    this.scoreService.getPlayerTwoScoreSubject().subscribe(p2s => {
      this.match.getCurrentSet().p2Score = p2s;
    });

    this.scoreService.getSetsSubject().subscribe(sets => {
        this.setupSets(sets);
      });

  }

  createMatch() {
    const body = {
      p1Name: this.match.getPlayerOne().name,
      p2Name: this.match.getPlayerTwo().name
    };
    this.http.post('/match/createMatch', body).subscribe(() => {

    }, err => {
      console.log(err);
    });
  }


  addPointP1() {
    this.http.post('/match/addPointP1', {}).subscribe(() => {

    }, err => {
      console.log(err);
    });
  }

  addPointP2() {
    this.http.post('/match/addPointP2', {}).subscribe(() => {

    }, err => {
      console.log(err);
    });
  }

  removePointP1() {
    this.http.post('/match/removePointP1', {}).subscribe(() => {

    }, err => {
      console.log(err);
    });
  }

  removePointP2() {
    this.http.post('/match/removePointP2', {}).subscribe(() => {

    }, err => {
      console.log(err);
    });
  }

  addSetP1() {
    this.http.post('/match/setWinnerP1', {}).subscribe(() => {

    }, err => {
      console.log(err);
    });

  }
  addSetP2() {
    this.http.post('/match/setWinnerP2', {}).subscribe(() => {

    }, err => {
      console.log(err);
    });

  }

  removeSet() {
    this.http.post('/match/removeSet', {}).subscribe(() => {

    }, err => {
      console.log(err);
    });
  }

  resetMatch() {
    this.http.delete('/match/resetMatch').subscribe(() => {

    }, err => {
      console.log(err);
    });
  }

  setupMatch(match) {
    this.match = new Match([new Player(match.players[0].name), new Player(match.players[1].name)]);
    this.setupSets(match.sets);
  }

  setupSets(sets) {
    this.match.getSets().length = 0;
    sets.forEach(newSet => {
      const set = new Set();
      set.setP1Points(newSet.p1Score);
      set.setP2Points(newSet.p2Score);
      set.setWinner(newSet.winner);
      this.match.addSet(set);
    });
  }

}

