import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { CardIconComponent } from '../../components/card-icon/card-icon.component';
import { PostCardComponent } from '../../components/post-card/post-card.component';
import { PostPreview } from '../../types/post-preview.type';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselComponent, CardIconComponent, PostCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent{

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

  public postCards: PostPreview[] = [
    {
      title: 'Honorary degree, Dr. Elva Cogorno de Verón',
      slug: 'honorary-degree-elva-cogorno',
      publicationDate: 'Jan 26, 2024',
      thumbnail: '5.jpg',
      summary: 'On January 26th, we had the privilege of conferring the prestigious honorary title of Doctorate Honoris Causa in Educational Management upon the distinguished Dr. Elva Cogorno de Veron. We are delighted to highlight and applaud Dr. Cogorno de Veron\'s tireless dedication, whose commitment and passion have left an indelible mark on the educational field. Her hard work and remarkable achievements have significantly enriched the academic community, serving as a source of inspiration for present and future generations. On this special day, we extend our heartfelt congratulations to Dr. Elva Cogorno de Veron. Her Doctorate Honoris Causa is not only a well-deserved recognition but also a compelling testimony of her exceptional dedication and valuable contributions to educational management.'
    },
    {
      title: 'ICES Awards 2018',
      slug: 'ices-awards-2018',
      publicationDate: 'Jan 25, 2024',
      thumbnail: '3.jpg',
      summary: 'In a memorable evening that highlighted the significance of academic excellence and innovation, the Scientific Institute of Higher Education (ICES) held its annual award ceremony in 2018, recognizing the outstanding achievements of students, faculty, and researchers who have made an indelible mark on the educational and scientific landscape.'
    },
    {
      title: 'Thank you for all your support',
      slug: '',
      publicationDate: 'Jan 26, 2024',
      thumbnail: '75.jpeg',
      summary: 'On January 26th, we had the privilege of conferring the prestigious honorary title of Doctorate Honoris Causa in Educational Management upon the distinguished Dr. Elva Cogorno de Veron. We are delighted to highlight and applaud Dr. Cogorno de Veron\'s tireless dedication, whose commitment and passion have left an indelible mark on the educational field. Her hard work and remarkable achievements have significantly enriched the academic community, serving as a source of inspiration for present and future generations. On this special day, we extend our heartfelt congratulations to Dr. Elva Cogorno de Veron. Her Doctorate Honoris Causa is not only a well-deserved recognition but also a compelling testimony of her exceptional dedication and valuable contributions to educational management.'
    }
  ];
}
