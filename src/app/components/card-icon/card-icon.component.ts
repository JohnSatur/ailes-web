import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-icon.component.html',
  styleUrl: './card-icon.component.scss'
})
export class CardIconComponent {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
