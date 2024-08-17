import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationsContentComponent } from './publications-content.component';

describe('PublicationsContentComponent', () => {
  let component: PublicationsContentComponent;
  let fixture: ComponentFixture<PublicationsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicationsContentComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PublicationsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
