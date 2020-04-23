import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketDetailPageComponent } from './rocket-detail-page.component';

describe('RocketDetailPageComponent', () => {
  let component: RocketDetailPageComponent;
  let fixture: ComponentFixture<RocketDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
