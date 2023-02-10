import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Player} from '../../shared/models/player';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private readonly PLAYER_URL: string;
  constructor(private http: HttpClient) {
    this.PLAYER_URL = 'http://localhost:8080/api/player'
  }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.PLAYER_URL);
  }
}
