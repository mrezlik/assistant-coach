import {Component} from '@angular/core';
import {Player} from '../../../../shared/models/player';
import {Observable} from 'rxjs';
import {PlayerService} from '../../../../core/http/player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent {

  players$: Observable<Player[]>;


  constructor(private playerService: PlayerService) {
    this.players$ = this.playerService.getPlayers();
  }

}
