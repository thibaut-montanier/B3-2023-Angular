import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TennisPlayerComponent } from './tennis-player.component';

describe('TennisPlayerComponent', () => {
  let component: TennisPlayerComponent;
  let fixture: ComponentFixture<TennisPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TennisPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TennisPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
