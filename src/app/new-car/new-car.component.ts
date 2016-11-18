import { Component, OnInit } from '@angular/core';
import {PostService} from "../post.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent implements OnInit {

  constructor(private service: PostService, private router: Router) { }
  onSubmit(model, company, price, colors, engine, epaClass, styleName, driveTrain, passengerCapacity, passengerDoors, bodyStyle, img, details){
    this.service.onAddCar(model, company, price, colors, engine, epaClass, styleName, driveTrain, passengerCapacity, passengerDoors, bodyStyle, img, details, this.service.getPosts().length);
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
    (<HTMLTitleElement>document.getElementsByTagName("title")[0]).innerText = "Add Car";
  }

}
