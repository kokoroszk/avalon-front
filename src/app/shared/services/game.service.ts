import { Injectable } from '@angular/core';
import { Game } from '../models/game';
import { Observable, of } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  game: Game

  constructor() {
    this.game = new Game()
  }

  get(): Game {
    return this.game;
  }

  setCurrentGame(game: Game){
    this.game = game
  }
}
