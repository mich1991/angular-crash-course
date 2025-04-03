import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateControlsComponent } from './template-controls.component';

describe('TemplateControlsComponent', () => {
  let component: TemplateControlsComponent;
  let fixture: ComponentFixture<TemplateControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateControlsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
