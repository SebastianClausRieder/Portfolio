import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsHeadlineComponent } from './skills-headline.component';

describe('SkillsHeadlineComponent', () => {
  let component: SkillsHeadlineComponent;
  let fixture: ComponentFixture<SkillsHeadlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsHeadlineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillsHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
