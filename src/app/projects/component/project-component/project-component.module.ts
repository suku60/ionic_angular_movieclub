import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../slider/slider.component';
import { CardComponent } from '../card/card.component';
import { ModelPageComponent } from '../model-page/model-page.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SliderComponent, CardComponent, ModelPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [SliderComponent, CardComponent, ModelPageComponent]
})

export class ProjectComponentModule { }
