import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryDetailComponent } from './gallery-detail/gallery-detail.component';
import {PagenotfoundComponent} from'./pagenotfound/pagenotfound.component'

const routes: Routes = [
  {path:'', loadChildren:()=>import('./modules/home/home-routing.module').then(x=>x.HomeRutingModule), pathMatch:'prefix'},
  {path:'404', loadChildren:()=>import('./modules/page-not-found/page-not-found.module').then(x=>x.PageNotFoundModule)},
  {path:'**', redirectTo:'404'}
  // { path:'', redirectTo: '/gallery', pathMatch:'prefix'},
  // { path: 'gallery', component: GalleryComponent, children:[{path: ':path', component: GalleryDetailComponent},]},
  // { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
