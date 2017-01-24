/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';


import { OhayoconComponent } from './ohayocon.component';

describe('OhayoconComponent', () => {
  let component: OhayoconComponent;
  let fixture: ComponentFixture<OhayoconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OhayoconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OhayoconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
