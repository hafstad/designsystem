import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kirby-tabbar-item',
  templateUrl: './tabbar-item.component.html',
  styleUrls: ['./tabbar-item.component.scss']
})
export class TabbarItemComponent implements OnInit {

  @Input() isActive: boolean;
  @Input() icon: string;
  @Input() activeIcon?: string;

  constructor() { }

  ngOnInit() {
  }

}
