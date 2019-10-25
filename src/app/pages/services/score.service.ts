import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { Match } from '../class/match';
import { Player } from '../class/player';
import { Set } from '../class/set';
import * as socketIo from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  private matchSubject: Subject<any> = new Subject<any>();
  private playerOneScoreSubject: Subject<any> = new Subject<any>();
  private playerTwoScoreSubject: Subject<any> = new Subject<any>();
  private setsSubject: BehaviorSubject<Set[]> = new BehaviorSubject<Set[]>([]);
  private ipAddress = window.location.hostname + (window.location.port? ':' + window.location.port : '');

  constructor() {
    const socket = socketIo(this.ipAddress);
    socket.on('matchUpdate', (data) => this.matchSubject.next(data));

    socket.on('playerOneScoreUpdate', (data) => this.playerOneScoreSubject.next(data));
    socket.on('playerTwoScoreUpdate', (data) => this.playerTwoScoreSubject.next(data));

    socket.on('setsUpdate', (data) => this.setsSubject.next(data));


   }

  public getMatchSubject(){
    return this.matchSubject.asObservable();
  }

  public getPlayerOneScoreSubject() {
    return this.playerOneScoreSubject.asObservable();
  }

  public getPlayerTwoScoreSubject() {
    return this.playerTwoScoreSubject.asObservable();
  }

  public getSetsSubject() {
    return this.setsSubject.asObservable();
  }






}
