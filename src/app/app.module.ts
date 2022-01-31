import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryDetailComponent } from './gallery-detail/gallery-detail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from  'ng-gallery/lightbox';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogPhotoComponent } from './dialog-photo/dialog-photo.component';
import { DialogCategoryComponent } from './dialog-category/dialog-category.component'

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    GalleryDetailComponent,
    PagenotfoundComponent,
    DialogPhotoComponent,
    DialogCategoryComponent,
  ],
  entryComponents: [
    DialogPhotoComponent,
    DialogCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    GalleryModule.withConfig({
       loadingStrategy: 'lazy',
       counter:false,
       thumb: false,
       
    }),
    LightboxModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
