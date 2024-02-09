import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'home', redirectTo: ''},
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: ''}
];
