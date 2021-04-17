import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  public randomNumber = Math.floor(5 + Math.random() * 103);

}
