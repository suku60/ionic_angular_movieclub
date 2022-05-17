import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../slider/slider.component';
import { ModelPageComponent } from '../model-page/model-page.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SliderComponent, ModelPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [SliderComponent, ModelPageComponent]
})
export class ProjectComponentModule { }
