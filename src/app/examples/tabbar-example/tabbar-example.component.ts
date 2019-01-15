import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kirby-tabbar-example',
  templateUrl: './tabbar-example.component.html',
  styleUrls: ['./tabbar-example.component.scss']
})
export class TabbarExampleComponent implements OnInit {

  menuItems = [
    {id: 1, title: 'For dig', icon: 'Foryou', activeIcon: 'ForyouActive', active: false},
    {id: 2, title: 'Indbakke', icon: 'Message', activeIcon: 'MessageActive', active: false},
    {id: 3, title: 'Menu', icon: 'Menu', activeIcon: 'MenuActive', active: true}
  ];

  constructor() { }

  ngOnInit() {
  }

  onClick(item) {
    console.log('Clicked (Example event handler): ' + item.title);
  }

}
