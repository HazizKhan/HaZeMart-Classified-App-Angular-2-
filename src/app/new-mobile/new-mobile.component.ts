import { Component, OnInit } from '@angular/core';
import {PostService} from "../post.service";
import {Mobile} from "../ad";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-mobile',
  templateUrl: './new-mobile.component.html',
  styleUrls: ['./new-mobile.component.css']
})
export class NewMobileComponent implements OnInit {

  constructor(private service: PostService, private router: Router) {

  }
  onSubmit(model, company,price, colors,processor, display, memory, os, img, details){

    this.service.onAddmobile(model, company,price, colors,processor, display, memory, os, img, details, this.service.getPosts().length);

    this.router.navigate(['']);

  }
  onImageUpload(img, input){
    let fr = new FileReader();
    fr.onload = function () {
      img.src = fr.result;
    };
    if(input.files[0]){
      fr.readAsDataURL(input.files[0])
    }
  }
  ngOnInit() {
    (<HTMLTitleElement>document.getElementsByTagName("title")[0]).innerText = "Add Mobile";

  }

}
