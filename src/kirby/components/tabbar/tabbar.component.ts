import { Component, OnInit, ContentChild, Input, Directive, TemplateRef, Output, EventEmitter } from '@angular/core';

@Directive({ selector: '[kirbyTabbarItem]' })
export class TabbarItemDirective {
  constructor() { }
}

export interface TabbarItem {
  title: string;
  id: number;
  icon: string;
  activeIcon: string;
  active: boolean;
}

@Component({
  selector: 'kirby-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.scss']
})
export class TabbarComponent implements OnInit {
  @Input() items: TabbarItem[];
  @Output() menuClick = new EventEmitter();
  @ContentChild(TabbarItemDirective, {read: TemplateRef}) tabbarItemTemplate;

  constructor() {
  }

  ngOnInit() {
  }

  onMenuClick(item): void {
    this.menuClick.emit(item);
    const activeElm = this.items.filter(el => el.active === true);
    activeElm.forEach(element => {
      element.active = false;
    });
    item.active = true;
  }
}
