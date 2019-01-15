import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kirby-tabbar-item',
  templateUrl: './tabbar-item.component.html',
  styleUrls: ['./tabbar-item.component.scss']
})
export class TabbarItemComponent implements OnInit {
  @Input() item: any;
  @Input() something: number;

  constructor() {
  }

  ngOnInit() {
  }

}
