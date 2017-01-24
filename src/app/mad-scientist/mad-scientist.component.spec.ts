/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MadScientistComponent } from './mad-scientist.component';

describe('MadScientistComponent', () => {
  let component: MadScientistComponent;
  let fixture: ComponentFixture<MadScientistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadScientistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadScientistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
