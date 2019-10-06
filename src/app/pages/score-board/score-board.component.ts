import { Component, OnInit } from '@angular/core';
import { Match } from '../class/match';
import { Player } from '../class/player';
import { Set } from '../class/set';
import { HttpClient } from '@angular/common/http';
import { ScoreService } from '../services/score.service';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.scss']
})
export class ScoreBoardComponent implements OnInit {

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

   this.scoreService.getMatchSubject().subscribe(match => {
        this.setupMatch(match);
      });
   this.scoreService.getPlayerOneScoreSubject().subscribe(p1s => {
    this.match.getCurrentSet().p1Score = p1s;
  });

  this.scoreService.getPlayerTwoScoreSubject().subscribe(p1s => {
    this.match.getCurrentSet().p2Score = p1s;
  });

  this.scoreService.getSetsSubject().subscribe(sets=>
    {
      this.setupSets(sets);
    });

  }

  setupMatch(match) {
    this.match = new Match([new Player(match.players[0].name), new Player(match.players[1].name)]);
    this.setupSets(match.sets);
  }

  setupSets(sets)
  {
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
