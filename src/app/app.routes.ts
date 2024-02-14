import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ProfilComponent } from './components/profil/profil.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjetComponent } from './components/projet/projet.component';

export const routes: Routes = [
  { path: '', redirectTo: '/profil', pathMatch: 'full' }, // Redirect empty path to 'accueil'
  { path: 'profil', component: ProfilComponent },
  { path: 'experiencepro', component: ExperienceComponent },
  { path: 'projets', component: ProjetComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  
