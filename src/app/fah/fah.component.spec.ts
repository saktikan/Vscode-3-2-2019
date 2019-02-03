import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FahComponent } from './fah.component';

describe('FahComponent', () => {
  let component: FahComponent;
  let fixture: ComponentFixture<FahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
