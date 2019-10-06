import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreBoardControllerComponent } from './score-board-controller.component';

describe('ScoreBoardControllerComponent', () => {
  let component: ScoreBoardControllerComponent;
  let fixture: ComponentFixture<ScoreBoardControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreBoardControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreBoardControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
