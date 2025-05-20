import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeerenterComponent } from './veerenter.component';

describe('VeerenterComponent', () => {
  let component: VeerenterComponent;
  let fixture: ComponentFixture<VeerenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeerenterComponent]
    });
    fixture = TestBed.createComponent(VeerenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
