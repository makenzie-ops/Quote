import { Component, OnInit } from '@angular/core';
import {Quote} from '../quotes'
import { from } from 'rxjs';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes :Quote []=[
  new Quote (1, 'The purpose of our lives is to be happy' , 'Dalai Lama') ,
  new  Quote (2,  'You cant go back and change the beginning but you can start where you are and change the ending.', 'C.S Lewis' ),
  new Quote  ( 3 , 'You dont have to be great to start but you have to start to be great' ,'Zig Ziglar'),
  ]
  showDetails = false;

  toggleDetails(index){
    console.log(this.quotes)
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  deleteQuote(toDelete,index){
    if(toDelete){
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].saying}?`)
    
    if(toDelete){
      this.quotes.splice(index,1)
    }
   }
  }

  constructor() { }

  ngOnInit() {
  }

}
