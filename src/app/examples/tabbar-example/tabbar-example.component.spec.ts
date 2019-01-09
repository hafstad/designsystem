import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbarExampleComponent } from './tabbar-example.component';

describe('TabbarExampleComponent', () => {
  let component: TabbarExampleComponent;
  let fixture: ComponentFixture<TabbarExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabbarExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabbarExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
