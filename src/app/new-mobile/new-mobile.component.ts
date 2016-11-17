import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-mobile',
  templateUrl: './new-mobile.component.html',
  styleUrls: ['./new-mobile.component.css']
})
export class NewMobileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    (<HTMLTitleElement>document.getElementsByTagName("title")[0]).innerText = "Add Mobile";

  }

}
