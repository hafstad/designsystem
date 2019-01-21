import { Component, OnInit,  Input, OnDestroy} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs';

@Component({
  selector: 'kirby-tabbar-item',
  templateUrl: './tabbar-item.component.html',
  styleUrls: ['./tabbar-item.component.scss']
})
export class TabbarItemComponent implements OnInit, OnDestroy {
  @Input() title: string;
  @Input() linkTo: string;
  @Input() icon: string;
  @Input() activeIcon: string;
  active = false;
  navEnd: Subscription;

  constructor(private router: Router) {
    this.navEnd = router.events.pipe(filter(evt => evt instanceof NavigationEnd))
      .subscribe(evt => {
        this.active = this.linkTo === this.router.url;
        console.log('Setting this.active in navigationend');
      });
  }

  ngOnInit() {
    this.active = this.linkTo === this.router.url;
  }

  ngOnDestroy(): void {
    this.navEnd.unsubscribe();
  }

  onClick() {
    console.log('onClick called - setting active. Link: ' + this.linkTo);
    this.active = true;
    if (this.linkTo) {
      this.router.navigate([this.linkTo]);
    }
  }
}
