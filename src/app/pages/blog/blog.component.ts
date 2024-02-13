import { Component, OnInit } from '@angular/core';
import { HeaderData, HeaderService } from '../../services/header.service';
import { PostPreview } from '../../types/post-preview.type';
import {  PostCardComponent } from '../../components/post-card/post-card.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import matter from 'gray-matter-browser';
import { CommonModule } from '@angular/common';

type BlogData = {
  posts: Array<string>;
};

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [PostCardComponent, HttpClientModule, CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit {
  private uiData: HeaderData = {
    title: 'AILES Blog',
    subtitle: 'Explore the latest insights and updates in higher education.',
    thumbnail: '../../../assets/img/bg-3.jpg'
  };

  public posts: Array<PostPreview> = [ ];

  constructor(public headerService: HeaderService, private http: HttpClient) { }

  ngOnInit(): void {
    this.headerService.uiData.set(this.uiData);

    const pathBlogData: string = 'assets/blog/blog-data.json';

    this.http.get<BlogData>(pathBlogData).subscribe({
      next: data => {
        const requests = data.posts.map(slug =>
          this.http.get(`assets/posts/${slug}/post.md`, {  responseType: 'text' })
        )
        forkJoin(requests).subscribe({
          next: allPostDetails => {
            this.posts = allPostDetails.map(markdownFile => {
              const {
                title = '',
                slug = '',
                publicationDate = '',
                thumbnail = '',
                summary = ''
              } = matter(markdownFile).data;
              return { title, slug, publicationDate , thumbnail, summary}
            })
          },
          error: err => {
            console.log(err);
          }
        })
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
