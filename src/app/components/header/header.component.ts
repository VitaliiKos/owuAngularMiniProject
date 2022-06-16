import {Component, OnInit} from '@angular/core';

import {ISession} from "../../modules/login/interfaces/session.interfaces";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sessionStatus:ISession;
  title:string;

  constructor() {
  }

  ngOnInit(): void {
    this.sessionStatus = {status: Boolean(localStorage.getItem('status'))}
    this.title = !this.sessionStatus.status ? 'login' : 'logout';

  }
}
