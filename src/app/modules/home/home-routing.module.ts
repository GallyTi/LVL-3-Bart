import { HomeComponent } from './../../home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// home-routing.module.ts
const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
      children: [
        { path: 'gallery', loadChildren: () => import('../gallery/gallery.module').then(x => x.GalleryModule) },
        { path: '', redirectTo: 'gallery', pathMatch: 'full' },
        { path: ':path', loadChildren: () => import('../detail/detail.module').then(x => x.DetailModule) },
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class HomeRutingModule {}
