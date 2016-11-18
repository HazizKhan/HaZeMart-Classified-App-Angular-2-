import {Component, OnInit, Input} from '@angular/core';
import {Mobile} from "../ad";
import {PostService} from "../post.service";

@Component({
  selector: 'app-all-mobiles',
  templateUrl: './all-mobiles.component.html',
  styleUrls: ['./all-mobiles.component.css']
})
export class AllMobilesComponent implements OnInit {
  posts;
  constructor(private service: PostService) {
    this.posts = this.service.getPosts();
  }
  addToCart(id){
    this.posts[id].inCart = true;
    this.service.onAddToCart(id);
  }
  ngOnInit() {
    (<HTMLTitleElement>document.getElementsByTagName("title")[0]).innerText = "Mobiles | HaZeMart";

  }

}
