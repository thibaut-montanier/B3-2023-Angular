import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TennisPlayerMainComponent } from './tennis-player-main.component';

describe('TennisPlayerMainComponent', () => {
  let component: TennisPlayerMainComponent;
  let fixture: ComponentFixture<TennisPlayerMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TennisPlayerMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TennisPlayerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
