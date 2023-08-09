import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketPanelComponent } from './ticket-panel.component';

describe('TicketPanelComponent', () => {
  let component: TicketPanelComponent;
  let fixture: ComponentFixture<TicketPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
