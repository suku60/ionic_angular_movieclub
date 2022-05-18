import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../slider/slider.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SliderComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [SliderComponent]
})

export class ProjectComponentModule { }
