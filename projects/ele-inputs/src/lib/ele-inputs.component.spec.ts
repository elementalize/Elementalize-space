import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EleInputsComponent } from './ele-inputs.component';

describe('EleInputsComponent', () => {
  let component: EleInputsComponent;
  let fixture: ComponentFixture<EleInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EleInputsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EleInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
