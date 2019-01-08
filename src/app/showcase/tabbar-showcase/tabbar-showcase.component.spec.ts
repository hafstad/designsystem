import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbarShowcaseComponent } from './tabbar-showcase.component';

describe('TabbarShowcaseComponent', () => {
  let component: TabbarShowcaseComponent;
  let fixture: ComponentFixture<TabbarShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabbarShowcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabbarShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
