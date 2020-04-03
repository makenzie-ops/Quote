import { Component, OnInit , Input , Output, EventEmitter } from '@angular/core';
import {Quote} from '../quotes'

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input()  quote:Quote;
  @Output() toDelete = new EventEmitter<boolean>();

  quoteDelete (remove: boolean){
    this.toDelete.emit(remove)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
