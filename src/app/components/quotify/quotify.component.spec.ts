import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotifyComponent } from './quotify.component';

describe('QuotifyComponent', () => {
  let component: QuotifyComponent;
  let fixture: ComponentFixture<QuotifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
