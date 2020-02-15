import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../../shared/models/game';
import { GameService } from '../../shared/services/game.service';
import { HttpClientService} from '../../shared/services/http-client.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  gameList: Game[]
  selectedGame: Game
  playerId: number

  constructor(
    private gameService: GameService,
    private httpClientService: HttpClientService,
    private router: Router
  ) { }

  ngOnInit() {
    this.httpClientService.get('game/list')
    .then((response) => this.gameList = response)
    .catch((err) => console.log(err))
  }

  selectGame(game: Game){
    this.selectedGame = game
  }

  enterGame() {
    this.selectedGame.playerId = this.playerId
    this.gameService.setCurrentGame(this.selectedGame)
    console.log(JSON.stringify(this.selectedGame));
    this.router.navigate(["/play"]);
  }
}
