import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import matter from 'gray-matter-browser';
import MarkdownIt from 'markdown-it';

import { HeaderData, HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss'
})
export class BlogPostComponent implements OnInit {
  private markdownIt = new MarkdownIt();
  public content: string = ''; // Contenido del blog
  public thumbnail: string = ''; // Url del thumbnail

  constructor(
    private activatedRoute: ActivatedRoute,
    private http:HttpClient,
    public headerService: HeaderService
  ) { }
  
  ngOnInit(): void {
    // Slug de la ruta 
    const slug = this.activatedRoute.snapshot.paramMap.get('postId');

    this.http.get(`assets/posts/${slug}/post.md`, { responseType: 'text'}).subscribe({
      next: data => this.manageMarkdownFileData(data),
      error: error => console.log(error)
    });
  }

  public manageMarkdownFileData(markdownFile: string | undefined): void {
    if (!markdownFile) { return; }

    const matterObj = matter(markdownFile);
    const { title = '', subtitle = '', thumbnail = ''} = matterObj.data;
    const headerData: HeaderData = {  title, subtitle, thumbnail };
    this.setHeaderData(headerData);

    this.content = this.markdownIt.render(matterObj.content);
    this.thumbnail = thumbnail;
  }

  /**
   * Método para enviar la información del header al servicio para renderizar en la plantilla.
   * 
   * @param headerData 
   */
  public setHeaderData(headerData: HeaderData): void {
    this.headerService.uiData.set(headerData);
  }
}
