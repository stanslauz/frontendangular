import { Component, OnInit } from '@angular/core';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  username = 'user';
  authenticated = false;
  constructor() { }

  ngOnInit(): void {

    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      }
    );
    if(this.authenticated)
    Emitters.authString.subscribe(
      (name: string) => {
        this.username = name;
      }
    )
   
  }

}
