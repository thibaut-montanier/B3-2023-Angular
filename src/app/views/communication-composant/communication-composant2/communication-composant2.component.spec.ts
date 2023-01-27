import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationComposant2Component } from './communication-composant2.component';

describe('CommunicationComposant2Component', () => {
  let component: CommunicationComposant2Component;
  let fixture: ComponentFixture<CommunicationComposant2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunicationComposant2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunicationComposant2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
