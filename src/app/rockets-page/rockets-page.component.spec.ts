import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketsPageComponent } from './rockets-page.component';

describe('RocketsPageComponent', () => {
  let component: RocketsPageComponent;
  let fixture: ComponentFixture<RocketsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RocketsPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
