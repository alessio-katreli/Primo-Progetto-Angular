import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ScienzaComponent } from './components/scienza/scienza.component';
import { SportComponent } from './components/sport/sport.component';
import { TechComponent } from './components/tech/tech.component';
import { AppComponent } from './app.component';



export const routes: Routes = [ 
  {path: 'home', component: HomeComponent},
  {path: 'scienza', component: ScienzaComponent},
  {path: 'sport', component: SportComponent},
  {path: 'tech', component:TechComponent},

];

bootstrap: [AppComponent]