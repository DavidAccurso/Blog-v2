import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';
import { PostServiceComponent } from '../post-service/post-service.component';
import { AuthorServiceComponent } from '../post-service/author-service.Component';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent implements OnInit {

  imgPath: string;
  authorPosts: Post[];
  @Input()
  authorId: number;
  authorInfo: string;

  constructor(
    private postService: PostServiceComponent,
    private authorService: AuthorServiceComponent
    ) { }

  ngOnInit() {
    this.authorPosts = this.postService.GetAllPostsFromAuthor(this.authorId);
    this.authorInfo = this.authorService.getInfo(this.authorId);
    this.imgPath = this.authorService.getImg(this.authorId);
  }
}
