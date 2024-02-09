import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

// SwiperJS
import { register } from 'swiper/element/bundle';
import { UniversityLogo } from '../../interfaces/universityLogo.interface';
import { CommonModule } from '@angular/common';
register();

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarouselComponent {
  public sliderImages: UniversityLogo[] = [
    {imgUrl: '../../../assets/img/ices-logo-min.png', altTag: 'Logo ICES'},
    {imgUrl: '../../../assets/img/ugr-logo-min.png', altTag: 'Logo UGR'},
    {imgUrl: '../../../assets/img/unisal-logo-min.png', altTag: 'Logo UNISAL'},
    {imgUrl: '../../../assets/img/upatagonia-logo-min.jpeg', altTag: 'Logo Universidad de la Patagonia'},
    {imgUrl: '../../../assets/img/ives-logo-min.png', altTag: 'Logo IVES'},
  ];
}
