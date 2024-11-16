import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapablitiesComponent } from './capablities.component';

describe('CapablitiesComponent', () => {
  let component: CapablitiesComponent;
  let fixture: ComponentFixture<CapablitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapablitiesComponent]
    });
    fixture = TestBed.createComponent(CapablitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
