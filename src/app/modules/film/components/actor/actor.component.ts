import {Component, Input, OnInit} from '@angular/core';

import {IActor} from "../../interfaces";
import {urls} from "../../../../constants";

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {

  @Input()
  actor: IActor;
  actorImage: string = urls.actorImages


  constructor() {
  }

  ngOnInit(): void {
  }
}
