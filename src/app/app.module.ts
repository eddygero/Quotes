import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotifyComponent } from './components/quotify/quotify.component';
import { QuoteFormComponent } from './components/quote-form/quote-form.component';
import { QuoteDetailsComponent } from './components/quote-details/quote-details.component';
import { DateSubmittedPipe } from './pipes/date-submitted.pipe';
import { HighlightVoteDirective } from './directives/highlight-vote.directive';
import { HighlightQuoteDirective } from './directives/highlight-quote.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuotifyComponent,
    QuoteFormComponent,
    QuoteDetailsComponent,
    DateSubmittedPipe,
    HighlightVoteDirective,
    HighlightQuoteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
