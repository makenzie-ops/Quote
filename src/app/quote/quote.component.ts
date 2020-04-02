import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes'
import { from } from 'rxjs';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote:Quotes []=[
  new Quotes (1, 'The purpose of our lives is to be happy' , 'Dalai Lama') ,
  new  Quotes (2,  'You cant go back and change the beginning but you can start where you are and change the ending.', 'C.S Lewis' ),
  new Quotes  ( 3 , 'You dont have to be great to start but you have to start to be great' ,'Zig Ziglar'),
  ]

  constructor() { }

  ngOnInit() {
  }

}
