import {Component, Input, OnInit} from '@angular/core';
import {Ad} from "../ad";
import {PostService} from "../post.service";


@Component({
  selector: 'post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.css']
})
export class PostContainerComponent implements OnInit{
  posts: Ad[];

  constructor(private postService: PostService) {
    this.posts = this.postService.getPosts();
  }
  Onclick(block){
    alert(block+" clicked");
  }
  addToCart(id){
    this.posts[id].inCart = true;
    this.postService.onAddToCart(id);
  }

  ngOnInit(){
    (<HTMLTitleElement>document.getElementsByTagName("title")[0]).innerText = "HaZeMart";

  }

}
