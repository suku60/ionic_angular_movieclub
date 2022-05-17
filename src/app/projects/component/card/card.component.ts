import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() poster: string;
  @Input() model: any;
  @Output() cardEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  cardClick(modelValue) {
    this.cardEvent.emit(modelValue);
  }

}
