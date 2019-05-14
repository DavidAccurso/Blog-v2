import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../post-service/post-service';
import { AuthorService } from '../post-service/author-service';
import { IPost } from '../IPost';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent implements OnInit {

  imgPath: string;
  authorPosts: IPost[];
  @Input()
  authorId: number;
  authorInfo: string;

  constructor(
    private postService: PostService,
    private authorService: AuthorService
    ) { }

  ngOnInit() {
    this.authorPosts = this.postService.GetAllPostsFromAuthor(this.authorId);
    this.authorInfo = this.authorService.getInfo(this.authorId);
    this.imgPath = this.authorService.getImg(this.authorId);
  }
}
