import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kirby-tabbar-example',
  templateUrl: './tabbar-example.component.html',
  styleUrls: ['./tabbar-example.component.scss']
})
export class TabbarExampleComponent implements OnInit {

  menuItems = [
    {id: 1, title: 'For dig', icon: 'Foryou', activeIcon: 'meh'},
    {id: 2, title: 'Indbakke', icon: 'Message', activeIcon: 'meh'},
    {id: 3, title: 'Novo Nordisk A/S B', icon: 'Menu', activeIcon: 'meh'}
  ];

  constructor() { }

  ngOnInit() {
  }

  onClick(item) {
    console.log('Clicked: ' + item);
  }

}
