import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Game } from '../../shared/models/game';
import { GameService } from '../../shared/services/game.service';
import { HttpClientService } from '../../shared/services/http-client.service'

import { Subject, Observable, interval } from 'rxjs';
import { flatMap, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  game: Game
  Game = Game.Game()

  playerForSelect: any[]

  missioned = false

  avoidDuplication: boolean = true

  constructor(
    private gameService: GameService,
    private httpClientService: HttpClientService,
    private router: Router
  ) {}

  ngOnInit() {
    this.game = this.gameService.get()

    if (this.game.gameId == null) {
      this.router.navigate(["/list"]);
    }

    this.polling.subscribe(data => {
      this.game = data
    });

    this.playerForSelect = this.game.players
  }

  selectMember() {
    let ids = this.playerForSelect.filter(p => p.isSelected).map(p => p.id)
    if (ids.length == this.game.missions[this.game.currentMission]) {
      this.httpClientService.selectMembers(this.game.gameId, ids)
      this.playerForSelect.forEach(e => e.isSelected = false)
    }
  }

  accept() {
    this.httpClientService.vote(this.game.gameId, this.game.playerId, Game.VOTE_ACCEPT)
    this.missioned = false
  }

  reject() {
    this.httpClientService.vote(this.game.gameId, this.game.playerId, Game.VOTE_REJECT)
    this.missioned = false
  }

  mission(isSuccess: boolean) {
    this.httpClientService.mission(this.game.gameId, isSuccess)
    this.missioned = true
  }

  missionSuccess() {
    this.mission(true)
  }

  missionFail() {
    this.mission(false)
  }

  isRequesting = false;
  polling =
    interval(1000).pipe(
      flatMap(
        () => {
          if(this.isRequesting) { return new Promise<Game>(()=>this.game)}
          this.isRequesting = true
          let g = this.httpClientService.getGame(this.game.gameId, this.game.operationCount)
          .then(game => { game.playerId = this.game.playerId; this.isRequesting = false; return game;})
          return g
        }
      ),
      takeWhile(() => true),
  )
  
}
