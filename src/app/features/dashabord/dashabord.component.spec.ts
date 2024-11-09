import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DashabordComponent } from './dashabord.component';

describe('DemoComponent', () => {
  let component: DashabordComponent;
  let fixture: ComponentFixture<DashabordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DashabordComponent]
    });
    fixture = TestBed.createComponent(DashabordComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
