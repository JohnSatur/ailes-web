import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { CardIconComponent } from '../../components/card-icon/card-icon.component';
import { BlogCardComponent } from '../../components/blog-card/blog-card.component';
import { BlogCard } from '../../interfaces/blogCard.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselComponent, CardIconComponent, BlogCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {
  public cardMission: CardIconComponent = {
    icon: 'ri-hand-heart-line',
    title: 'Mission',
    description: 'At AILES, our mission is to drive excellence and innovation in higher education worldwide. We are committed to bringing visionary educational leaders together and creating a collaborative environment where diversity, creativity, and academic quality thrive. We seek to foster the continuous development of higher education, empowering leaders to tackle global challenges and provide transformative educational experiences.'
  }

  public cardVision: CardIconComponent = {
    icon: 'ri-crosshair-2-fill',
    title: 'Vision',
    description: 'Our vision at AILES is to forge a global educational future where quality and inclusion are the norm. We envision an educational landscape that transcends borders, driven by innovation and collaboration among passionate leaders. We strive to be the catalyzing force inspiring significant changes in higher education, building a legacy of excellence that endures through generations and shapes leaders capable of addressing tomorrow\'s challenges with vision and determination.'
  }

  public blogCards: BlogCard[] = [
    {
      imgUrl: '5.jpg',
      date: 'Jan 26, 2024',
      title: 'Honorary degree, Dr. Elva Cogorno de Verón',
      summary: 'On January 26th, we had the privilege of conferring the prestigious honorary title of Doctorate Honoris Causa in Educational Management upon the distinguished Dr. Elva Cogorno de Veron. We are delighted to highlight and applaud Dr. Cogorno de Veron\'s tireless dedication, whose commitment and passion have left an indelible mark on the educational field. Her hard work and remarkable achievements have significantly enriched the academic community, serving as a source of inspiration for present and future generations. On this special day, we extend our heartfelt congratulations to Dr. Elva Cogorno de Veron. Her Doctorate Honoris Causa is not only a well-deserved recognition but also a compelling testimony of her exceptional dedication and valuable contributions to educational management.'
    },
    {
      imgUrl: '3.jpg',
      date: 'Jan 25, 2024',
      title: 'AILES - Opening ceremony',
      summary: 'On January 26th, we had the privilege of conferring the prestigious honorary title of Doctorate Honoris Causa in Educational Management upon the distinguished Dr. Elva Cogorno de Veron. We are delighted to highlight and applaud Dr. Cogorno de Veron\'s tireless dedication, whose commitment and passion have left an indelible mark on the educational field. Her hard work and remarkable achievements have significantly enriched the academic community, serving as a source of inspiration for present and future generations. On this special day, we extend our heartfelt congratulations to Dr. Elva Cogorno de Veron. Her Doctorate Honoris Causa is not only a well-deserved recognition but also a compelling testimony of her exceptional dedication and valuable contributions to educational management.'
    },
    {
      imgUrl: '75.jpeg',
      date: 'Jan 26, 2024',
      title: 'Thank you for all your support',
      summary: 'On January 26th, we had the privilege of conferring the prestigious honorary title of Doctorate Honoris Causa in Educational Management upon the distinguished Dr. Elva Cogorno de Veron. We are delighted to highlight and applaud Dr. Cogorno de Veron\'s tireless dedication, whose commitment and passion have left an indelible mark on the educational field. Her hard work and remarkable achievements have significantly enriched the academic community, serving as a source of inspiration for present and future generations. On this special day, we extend our heartfelt congratulations to Dr. Elva Cogorno de Veron. Her Doctorate Honoris Causa is not only a well-deserved recognition but also a compelling testimony of her exceptional dedication and valuable contributions to educational management.'
    }
  ]; 
}
