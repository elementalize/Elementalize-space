import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EleInputsComponent } from './ele-inputs.component';
import { EleTextBoxComponent } from './ele-text-box/ele-text-box.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EleInputsComponent,
    EleTextBoxComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    EleInputsComponent,
    EleTextBoxComponent
  ]
})
export class EleInputsModule { }
