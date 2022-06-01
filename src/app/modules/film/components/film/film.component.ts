import {Component, Input, OnInit} from '@angular/core';
import {IFilm} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  @Input()
  film:IFilm;

  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }


  getDetail() {
    console.log(this.film)
    this.router.navigate([this.film.id], {relativeTo: this.activatedRoute})

  }
}
