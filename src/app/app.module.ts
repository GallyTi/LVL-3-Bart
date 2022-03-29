import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryDetailComponent } from './gallery-detail/gallery-detail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LightboxModule } from  'ng-gallery/lightbox';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ModalModule } from'ngx-bootstrap/modal'
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LazyloadDirective } from './lazyload.directive';
import { GalleryModalComponent } from './modals/gallery-modal/gallery-modal.component';
import { GalleryDetailModalComponent } from './modals/gallery-detail-modal/gallery-detail-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    GalleryDetailComponent,
    PagenotfoundComponent,
    HomeComponent,
    LazyloadDirective,
    GalleryModalComponent,
    GalleryDetailModalComponent,
  ],
  entryComponents: [
    GalleryModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    LightboxModule,
    MatDialogModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
