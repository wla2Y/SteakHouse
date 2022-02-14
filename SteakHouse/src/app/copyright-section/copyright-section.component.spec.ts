import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyrightSectionComponent } from './copyright-section.component';

describe('CopyrightSectionComponent', () => {
  let component: CopyrightSectionComponent;
  let fixture: ComponentFixture<CopyrightSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyrightSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyrightSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
