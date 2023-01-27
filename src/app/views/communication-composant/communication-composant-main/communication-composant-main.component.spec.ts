import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationComposantMainComponent } from './communication-composant-main.component';

describe('CommunicationComposantMainComponent', () => {
  let component: CommunicationComposantMainComponent;
  let fixture: ComponentFixture<CommunicationComposantMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunicationComposantMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunicationComposantMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
