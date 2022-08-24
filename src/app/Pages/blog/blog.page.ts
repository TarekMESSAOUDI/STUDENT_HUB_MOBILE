/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { faComment, faHeart, faThumbsDown, faThumbsUp, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Commentaire } from 'src/app/Models/Commentaire';
import { BlogService } from 'src/app/Services/Blog/blog.service';
import { CommentaireService } from 'src/app/Services/Commentaire/commentaire.service';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {

  id: any;
  idUser = localStorage.getItem('Id');
  commentaire: any;
  blog: any;
  u: any;
  reponse: any;
  nComment: number;
  faHeart = faHeart;
  faTrash = faTrash;
  faThumbsUp = faThumbsUp;
  faComment = faComment;
  faThumbsDown = faThumbsDown;
  comment: any = {};
  listReponse: any;
  hideCommentform = true;
  hamClick: boolean;

  constructor(private blogservice: BlogService, private renderer: Renderer2, private commentaireservice: CommentaireService,
    private router: Router, private userservice: UserService) { }

  hamburgerClick() {
    this.hamClick = !this.hamClick;
  }

  ngOnInit(): void {
    this.getBlogById();
    this.getCommentaireByBlogId();
    this.CountCommentaireByBlogId();
    this.findUserById(localStorage.getItem('Id'));
    this.hideSupp(this.id);
    this.hideCommentForm();
  }

  getBlogById() {
    this.id = sessionStorage.getItem('IdBlog');
    this.blogservice.getBlogById(this.id).pipe().subscribe(
      data => {
        this.blog = data;
        return this.blog;
      }
    );
  }

  getCommentaireByBlogId() {
    this.id = sessionStorage.getItem('IdBlog');
    this.commentaireservice.getCommentaireByBlogId(this.id).subscribe(
      data => {
        this.commentaire = data;
        return this.commentaire;
      }
    );
  }

  CountCommentaireByBlogId() {
    this.id = sessionStorage.getItem('IdBlog');
    this.commentaireservice.countCommentaireByBlogId(this.id).subscribe(
      data => {
        this.nComment = data;
        return this.nComment;
      }
    );
  }

  @ViewChild('like') like: ElementRef;
  likeBlog() {
    const buttonLike = this.like.nativeElement.classList.contains('is-active');
    if (buttonLike) {
      this.renderer.removeClass(this.like.nativeElement, 'is-active');
    } else {
      this.renderer.addClass(this.like.nativeElement, 'is-active');
    }
    this.hamClick = !this.hamClick;
    this.id = sessionStorage.getItem('IdBlog');
    this.blogservice.likeBlog(this.id).subscribe(
      data => data
    );
  }

  dislikeBlog() {
    this.id = sessionStorage.getItem('IdBlog');
    this.blogservice.disLikeBlog(this.id).subscribe(
      data => data
    );
  }

  findUserById(id: any) {
    this.id = localStorage.getItem('Id');
    this.userservice.findById(this.id).subscribe(
      data => {
        this.u = data;
        return this.u;
      }
    );
  }

  addComment(comment: Commentaire) {
    this.id = sessionStorage.getItem('IdBlog');
    this.idUser = localStorage.getItem('Id');
    this.commentaireservice.addCommentaire(this.id, this.idUser, comment).subscribe(
      data => {
        comment = data;
        console.log(comment);
        this.router.navigateByUrl('/home/blogs/blog');
        return comment;
      }
    );
  }

  deleteCommentaire(id: any) {
    this.commentaireservice.deleteCommentaire(id).subscribe(
      data => data
    );
  }

  hideSupp(id: any) {
    // eslint-disable-next-line eqeqeq
    if (id == localStorage.getItem('Id')) {
      return false;
    } else {
      return true;
    }
  }

  hideCommentForm() {
    if (localStorage.length > 2) {
      this.hideCommentform = false;
    }
  }
}
