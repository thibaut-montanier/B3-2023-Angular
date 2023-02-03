import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TennisPlayerFormComponent } from './tennis-player-form.component';

describe('TennisPlayerFormComponent', () => {
  let component: TennisPlayerFormComponent;
  let fixture: ComponentFixture<TennisPlayerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TennisPlayerFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TennisPlayerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
