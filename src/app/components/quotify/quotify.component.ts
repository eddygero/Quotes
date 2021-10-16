import {
  Component,
  OnInit
} from '@angular/core';
import {
  Quote
} from '../../models/quote';

@Component({
  selector: 'app-quotify',
  templateUrl: './quotify.component.html',
  styleUrls: ['./quotify.component.css']
})
export class QuotifyComponent implements OnInit {

  quotes: Quote[] = [ /* quote array */
    new Quote('“You might not have a car or a big gold chain, stay true to yourself and things will change.”', ' Snoop Dogg.', 'Allan Omondi', new Date(2021, 9, 16), 5, 0),
    new Quote('“Remind yourself. Nobody built like you, you design yourself.”', 'Jay-Z.', 'Angela Ann', new Date(2021, 9, 16), 2, 1),
    new Quote('“Live your life, live it right. Be different, do different things.”', 'Kendrick Lamar.', 'Pamela Obuya', new Date(2021, 9, 16), 1, 5),
    new Quote('“Keep on pushing the boundaries and reaching for higher heights.”', 'Sean Combs.', 'Gero Temitayo', new Date(2021, 9, 16), 1, 1),
    new Quote('“How many people you bless is how you measure success”', ' Rick Ross.', 'Baby Girl', new Date(2021, 9, 16), 3, 2),
  ];

  toggleDetails(index) {
    /* function for toggling quote details */
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  toggleText(index) {
    /* function for toggling quote small text */
    this.quotes[index].showMore = !this.quotes[index].showMore;
    if (this.quotes[index].showMore)
      this.quotes[index].smallText = 'see less';
    else
      this.quotes[index].smallText = 'see more';
  }
  quoteDeleted(deleteQuote, index) {
    /* function for deleting quote */
    if (deleteQuote) {
      let deleteQuote = confirm(`Are you sure you want to delete this quote?`)
      if (deleteQuote) {
        this.quotes.splice(index, 1);
      }
    }
  }
  highlightHighest() {
    /* function for getting quote with highest vote*/
    let quotesUpvote = []
    let highestUpVote: number
    for (let j = 0; j < this.quotes.length; j++) {
      quotesUpvote.push(this.quotes[j].upVote)
    }

    quotesUpvote.sort(function (a, b) {
      return b - a
    })
    highestUpVote = quotesUpvote[0]
    return highestUpVote;
  }

  get sortQuotes() {
    /*  sorts quotes according to submission date */
    return this.quotes.sort((a, b) => {
      return <any > new Date(b.submissionDate) - < any > new Date(a.submissionDate);
    });
  }

  addNewQuote(quote) {
    /* function for adding a new quote */
    this.quotes.unshift(quote)
  }
  constructor() {}

  ngOnInit(): void {}

}