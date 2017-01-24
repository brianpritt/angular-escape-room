/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ohayocon1Component } from './ohayocon1.component';

describe('Ohayocon1Component', () => {
  let component: Ohayocon1Component;
  let fixture: ComponentFixture<Ohayocon1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ohayocon1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ohayocon1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
