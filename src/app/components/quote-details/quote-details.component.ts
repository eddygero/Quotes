import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {
  Quote
} from '../../models/quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote: Quote;
  @Output() deleteQuote = new EventEmitter<boolean>();

  Delete(yesDelete: boolean) { 
    this.deleteQuote.emit(yesDelete);
  }

  upVote() { /* function that increments vote count */
    this.quote.upVote++;
  }
  downVote() { /* function that increments vote count */
    this.quote.downVote++
  }

  constructor() { }

  ngOnInit(): void { }

}