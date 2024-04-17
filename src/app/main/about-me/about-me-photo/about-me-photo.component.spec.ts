import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMePhotoComponent } from './about-me-photo.component';

describe('AboutMePhotoComponent', () => {
  let component: AboutMePhotoComponent;
  let fixture: ComponentFixture<AboutMePhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMePhotoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutMePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
