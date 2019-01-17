import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kirby-tabbar-item',
  templateUrl: './tabbar-item.component.html',
  styleUrls: ['./tabbar-item.component.scss']
})
export class TabbarItemComponent implements OnInit {
  @Input() title: string;
  @Input() linkTo: string;
  @Input() icon: string;
  @Input() activeIcon: string;
  active = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }


  onClick() {
    this.router.navigate(['./examples/tabbar/dummy-1']);

    console.log(this.linkTo);
  }

}
