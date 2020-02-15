import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Game } from '../../shared/models/game';
import { GameService } from '../../shared/services/game.service';
import { HttpClientService } from "../../shared/services/http-client.service"

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  gameName: String = ""
  playerNames: String[] = ["","","","","","",""]
  playerCount: number = 0

  constructor(
    private gameService: GameService,
    private httpClientService: HttpClientService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  createGame() {
    if (this.gameName != ""
        && this.playerNames.filter(s=>s!="").length > 4) {

      let playerNames = this.playerNames.filter(s=>s!="")
      this.httpClientService.createGame(this.gameName, playerNames)

      this.router.navigate(["/list"]);
    }
  }

}
