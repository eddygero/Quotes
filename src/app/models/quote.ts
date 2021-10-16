export class Quote {
  showDetails: boolean;
  showMore: boolean;
  constructor(public quote: string, public author: string, public submitter: string, public submissionDate: Date, public upVote: number, public downVote: number, public smallText: any = 'see more') {
    this.showDetails = false;
    this.showMore = false;
  }
}