import { Component, OnInit } from '@angular/core';
import {IFilm} from "../../interfaces";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  film:any;

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.data)
    this.activatedRoute.data.subscribe(({data})=>
      this.film = data
    )
    console.log(this.film)
  }

}
