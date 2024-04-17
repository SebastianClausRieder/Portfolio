import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Headline2Component } from './headline2.component';

describe('Headline2Component', () => {
  let component: Headline2Component;
  let fixture: ComponentFixture<Headline2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Headline2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Headline2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
