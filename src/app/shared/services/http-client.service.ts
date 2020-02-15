import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Game } from '../models/game'


@Injectable()
export class HttpClientService {

  private httpOptions: any = {
    // ヘッダ情報
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    body: null
  };

  private host: string = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  public getGameList(): Promise<Game[]> {
    return this.get("game/list")
  }

  public getGame(gameId: number, operationCount: number): Promise<Game> {
    return this.get("game/get?gameId=" + gameId + "&operationCount=" + operationCount)
  }

  public createGame(gameName: String, playerNames: String[]) {
    const body = { gameName: gameName, playerNames: playerNames}
    return this.post("game/create", body)
  }

  public selectMembers(gameId: number, selectedPlayerId: number[]) {
    const body = {gameId: gameId, selectedPlayerId: selectedPlayerId}
    return this.post("game/selectMembers", body)
  }

  public vote(gameId: number, playerId: number, vote: number) {
    const body = {gameId: gameId, playerId: playerId, vote: vote}
    return this.post("game/vote", body)
  }

  public mission(gameId: number, isSuccess: boolean) {
    const body = {gameId: gameId, isSuccess: isSuccess ? 1 :0}
    return this.post("game/mission", body)
  }

  public get(pathWithQuery: String): Promise<any> {
    return this.http.get(this.host + pathWithQuery, this.httpOptions)
    .toPromise()
    .then((res) => {
      const response: any = res;
      return response;
    })
    .catch(this.errorHandler);
  }

  public post(path: String, body: any): Promise<any> {
    return this.http.post(this.host + path, body, this.httpOptions)
    .toPromise()
    .then((res) => {
      const response: any = res;
      return response;
    })
    .catch(this.errorHandler);
  }

  private errorHandler(err) {
    console.log('Error occured.', err);
    return Promise.reject(err.message || err);
  }

}