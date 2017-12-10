import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSileneComponent } from './news-silene.component';

describe('NewsSileneComponent', () => {
  let component: NewsSileneComponent;
  let fixture: ComponentFixture<NewsSileneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsSileneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSileneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
