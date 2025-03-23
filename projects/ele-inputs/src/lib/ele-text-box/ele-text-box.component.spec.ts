import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EleTextBoxComponent } from './ele-text-box.component';

describe('EleTextBoxComponent', () => {
  let component: EleTextBoxComponent;
  let fixture: ComponentFixture<EleTextBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EleTextBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EleTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
