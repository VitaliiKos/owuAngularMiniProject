import {Component, OnInit} from '@angular/core';
import {ITheme} from "../../modules/film/interfaces";
import {DataService} from "../../modules/film/services";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  themeStatus: ITheme;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.storageThemeStatus.subscribe(value => {
      this.themeStatus = value
    })
  }

  chooseTheme() {
    this.dataService.storageThemeStatus.subscribe(value => {
      this.themeStatus = {'status': !value.status}
    })

    this.dataService.storageThemeStatus.next(this.themeStatus);
  }
}
