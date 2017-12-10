import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuaireSileneComponent } from './annuaire-silene.component';

describe('AnnuaireSileneComponent', () => {
  let component: AnnuaireSileneComponent;
  let fixture: ComponentFixture<AnnuaireSileneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnuaireSileneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnuaireSileneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
