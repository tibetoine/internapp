import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsSileneComponent } from './news-silene/news-silene.component';
import { AnnuaireSileneComponent } from './annuaire-silene/annuaire-silene.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'news', component: NewsSileneComponent },
  { path: 'news/:id',      component: NewsSileneComponent }, /* TODO faire le composant qui va bien et mettre à jour ici */
  {
    path: 'annuaire',
    component: AnnuaireSileneComponent
  },
  { path: '',
    redirectTo: '/news',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(appRoutes) ],
  	exports: [ RouterModule ]
})



export class AppRoutingModule {}
