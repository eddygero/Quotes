import {
  Directive,
  ElementRef,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appHighlightVote]'
})
export class HighlightVoteDirective {

  constructor(private elem: ElementRef) {}

  @HostListener("click") onClicks() {
    this.voteColor("rgb(93, 228, 255)")
  }

  private voteColor(action: string) {
    this.elem.nativeElement.style.color = action;
  }

}