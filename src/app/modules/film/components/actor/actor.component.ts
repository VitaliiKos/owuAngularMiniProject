import {Component, Input, OnInit} from '@angular/core';
import {IActor, ITheme} from "../../interfaces";
import {urls} from "../../../../constants";
import {DataService} from "../../services";

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {

  @Input()
  actor:IActor;
  actorImage:string = urls.actorImages
  themeStatus:ITheme



  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.storageThemeStatus.subscribe(value => {
      this.themeStatus = value
    })
  }
}
