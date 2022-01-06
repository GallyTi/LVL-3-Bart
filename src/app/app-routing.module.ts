import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryDetailComponent } from './gallery-detail/gallery-detail.component';
import {PagenotfoundComponent} from'./pagenotfound/pagenotfound.component'

const routes: Routes = [
  {path:'', redirectTo: '/gallery', pathMatch:'full'},
  {path: 'gallery', component: GalleryComponent},
  {path: 'detail', component: GalleryDetailComponent},
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
