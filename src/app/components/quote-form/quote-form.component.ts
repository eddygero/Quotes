import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import {
  Quote
} from '../../models/quote';
import {
  NgForm
} from '@angular/forms'

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quote("", "", "", new Date(), 0, 0);
  @Output() addQuote = new EventEmitter < Quote > ();

  submitQuote(form: NgForm) { /*function that creates a new quote array */
    this.addQuote.emit(this.newQuote);
    this.newQuote = new Quote("", "", "", new Date(), 0, 0)
  }
  get diagnostic() { /* used to test if we are receiving form inputs */
    return JSON.stringify(this.newQuote);
  }
  constructor() {}

  ngOnInit(): void {}

}