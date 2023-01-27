import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationComposant1Component } from './communication-composant1.component';

describe('CommunicationComposant1Component', () => {
  let component: CommunicationComposant1Component;
  let fixture: ComponentFixture<CommunicationComposant1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunicationComposant1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunicationComposant1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
