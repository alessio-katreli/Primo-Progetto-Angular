import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Vista2Component } from './vista-2/vista-2.component';
import { Vista3Component } from './vista-3/vista-3.component';
import { Vista1Component } from './vista-1/vista-1.component';

export const routes: Routes = [
    {path: '', component: HomeComponent}, 
    {path: '', component: Vista1Component}, 
    {path: 'vista-2', component: Vista2Component}, 
    {path: 'vista-3', component: Vista3Component}, 
];
