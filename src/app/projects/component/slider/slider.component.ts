import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})

export class SliderComponent implements OnInit {
  @Input() sliderInput: any;
  @Output() sliderEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  sliderClick(modelValue) {
    this.sliderEvent.emit(modelValue);
    // console.log("working?")

  }

}
