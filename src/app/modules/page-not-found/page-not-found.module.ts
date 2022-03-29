
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from 'src/app/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PageNotFoundModule { }
