import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OddListComponent } from './odd-list.component';

describe('OddListComponent', () => {
  let component: OddListComponent;
  let fixture: ComponentFixture<OddListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OddListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OddListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
