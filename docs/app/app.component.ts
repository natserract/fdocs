import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
  ) {
  }

  response: HighlightResult;

  code = `fn main() {
    panic!("crash and burn");
  }`;

  ngOnInit(){

  }
}
