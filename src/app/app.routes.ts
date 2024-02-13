import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { CookiesComponent } from './pages/cookies/cookies.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'home', redirectTo: ''},
    { path: 'about', component: AboutComponent },
    { path: 'blog', component: BlogComponent},
    { path: 'blog/:postId', component: BlogPostComponent },
    { path: 'privacy', component: PrivacyComponent },
    { path: 'cookies', component: CookiesComponent},
    { path: '**', redirectTo: ''}
];
