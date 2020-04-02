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
    {id:1,   saying  : 'The purpose of our lives is to be happy' , author:'Dalai Lama'},
    {id:2,  saying :'You cant go back and change the beginning but you can start where you are and change the ending.', author:'C.S Lewis' },
    {id:3 ,   saying :'You dont have to be great to start but you have to start to be great' ,author:'Zig Ziglar'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
