/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewCarComponent } from './new-car.component';

describe('NewCarComponent', () => {
  let component: NewCarComponent;
  let fixture: ComponentFixture<NewCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
