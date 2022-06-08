import {Component, OnInit} from '@angular/core';

import {DataService, DataActorService, ActorService} from "../../services";
import {IDataActor, ITheme} from "../../interfaces";

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  constructor(private actorService: ActorService, private dataService: DataService, private dataActorService: DataActorService) {
  }

  filmId: number;
  actors: IDataActor;
  themeStatus: ITheme;

  ngOnInit(): void {
    this.dataService.storageThemeStatus.subscribe(value => {
      this.themeStatus = value
    })
  }

  getActors(): void {
    this.dataService.storageFilm.subscribe(value => {
      this.filmId = value.id
    })

    this.actorService.getActors(this.filmId).subscribe((value) => {
      this.dataActorService.storageActor.next(value);
      this.actors = value;
    });
  }
}
