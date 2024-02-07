import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

// SwiperJS
import { register } from 'swiper/element/bundle';
import { UniversityLogo } from '../../interfaces/universityLogo.interface';
register();

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // SwiperJS
})
export class MainComponent {
  public sliderImages: UniversityLogo[] = [
    {imgUrl: '../../../assets/img/ices-logo-min.png', altTag: 'Logo ICES'},
    {imgUrl: '../../../assets/img/ugr-logo-min.png', altTag: 'Logo UGR'},
    {imgUrl: '../../../assets/img/unisal-logo-min.png', altTag: 'Logo UNISAL'},
    {imgUrl: '../../../assets/img/upatagonia-logo-min.jpeg', altTag: 'Logo Universidad de la Patagonia'},
    {imgUrl: '../../../assets/img/ives-logo-min.png', altTag: 'Logo IVES'},
  ];
}

// TODO: https://www.youtube.com/watch?v=bVjn3-TpYro