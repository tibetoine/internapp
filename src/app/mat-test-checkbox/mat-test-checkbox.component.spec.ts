import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTestCheckboxComponent } from './mat-test-checkbox.component';

describe('MatTestCheckboxComponent', () => {
  let component: MatTestCheckboxComponent;
  let fixture: ComponentFixture<MatTestCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatTestCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTestCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
