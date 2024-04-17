import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPolicyENComponent } from './privacy-policy-en.component';

describe('PrivacyPolicyENComponent', () => {
  let component: PrivacyPolicyENComponent;
  let fixture: ComponentFixture<PrivacyPolicyENComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacyPolicyENComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrivacyPolicyENComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
