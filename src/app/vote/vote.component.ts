import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import {Quote} from '../quotes'

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  
    upsVote = 0;
    downsVote = 0;

    upVote(){
      this.upsVote = this.upsVote + 1;
    }

    downVote(){
      this.downsVote = this.downsVote + 1;
    }

  constructor() { }

  ngOnInit() {
  }

}