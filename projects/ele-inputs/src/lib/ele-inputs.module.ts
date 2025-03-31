import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EleInputsComponent } from './ele-inputs.component';
import { EleTextBoxComponent } from './ele-text-box/ele-text-box.component';
import { FormsModule } from '@angular/forms';
import { EleDropDownComponent } from './ele-drop-down/ele-drop-down.component';
@NgModule({
  declarations: [
    EleInputsComponent,
    EleTextBoxComponent,
    EleDropDownComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    EleInputsComponent,
    EleTextBoxComponent,
    EleDropDownComponent
  ]
})
export class EleInputsModule { }
