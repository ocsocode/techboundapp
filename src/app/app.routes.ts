import { Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { BeansComponent } from './beans/beans.component';
import { RiceComponent } from './rice/rice.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'posts', component: PostsComponent},
    { path: 'beans', component: BeansComponent},
    { path: 'rice', component: RiceComponent},
];
