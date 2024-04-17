import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PLanguagesComponent } from './p-languages.component';

describe('PLanguagesComponent', () => {
  let component: PLanguagesComponent;
  let fixture: ComponentFixture<PLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PLanguagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
