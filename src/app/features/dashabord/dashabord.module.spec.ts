import { TestBed } from '@angular/core/testing';
import { DashabordModule } from './dashabord.module';

describe('DemoModule', () => {
  let pipe: DashabordModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [DashabordModule] });
    pipe = TestBed.inject(DashabordModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
