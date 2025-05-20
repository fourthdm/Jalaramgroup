import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MayurenterComponent } from './mayurenter.component';

describe('MayurenterComponent', () => {
  let component: MayurenterComponent;
  let fixture: ComponentFixture<MayurenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MayurenterComponent]
    });
    fixture = TestBed.createComponent(MayurenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
