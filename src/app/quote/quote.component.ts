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
  new Quote (1, 'The purpose of our lives is to be happy' , 'Dalai Lama' ,'Pewis Pluton' ,new Date(1978,1,16)) ,
  new  Quote (2,  'You cant go back and change the beginning but you can start where you are and change the ending.', 'C.S Lewis','Patricia Wamuyu',new Date(2015,6,16) ),
  new Quote  ( 3 , 'You dont have to be great to start but you have to start to be great' ,'Zig Ziglar','Megan Erasto',new Date(2004,11,8)),
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
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id= quoteLength +1;
    this.quotes.push(quote)
  }

  best:number = 0

  getHighestVote() {
    for (let i = 0; i < this.quotes.length; i++) {
    if(this.quotes[i].ups>this.best){
    this.best= this.quotes[i].ups;
    }
    }
    for (let i = 0; i < this.quotes.length; i++) {
    if(this.quotes[i].ups===this.best){
    console.log(this.quotes[i])
    this.quotes[i].highestQuote = true
    }
    else{
    this.quotes[i].highestQuote = false
    }
    }
    }
    

  upVotes(index){
    this.quotes[index].ups = this.quotes[index].ups + 1
    this.getHighestVote()
  }
  downVotes(index){
    this.quotes[index].downs = this.quotes[index].downs + 1
    this.getHighestVote()
  }

 
  

  constructor() { }

  ngOnInit() {
  }

}
