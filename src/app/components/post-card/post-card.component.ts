import { Component, Input } from '@angular/core';
import { PostPreview } from '../../types/post-preview.type';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent {
  @Input() postPreview: PostPreview = {
    title: '',
    slug: '',
    publicationDate: '',
    thumbnail: '',
    summary: ''
  }
}
