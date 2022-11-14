import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleatEventComponent } from './deleat-event.component';

describe('DeleatEventComponent', () => {
  let component: DeleatEventComponent;
  let fixture: ComponentFixture<DeleatEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleatEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleatEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
