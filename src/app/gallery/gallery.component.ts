import { GalleryModalComponent } from './../modals/gallery-modal/gallery-modal.component';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ApiService } from '../api/api.service';
import { GETCategoryFiles, GETGallery } from '../model/gallery';
import { environment } from 'src/environments/environment';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['../style.sass']
})
export class GalleryComponent implements OnInit {
  
  modalRef?: BsModalRef;

  categoriesList: GETCategoryFiles[] = [];

  constructor(private api: ApiService, private modalService: BsModalService) {
  }
  
  ngOnInit() {
    this.getCategory();
  }

  //ANGULAR GET DISPLAY ATRIBUTES OF GALLERY
  getCategory(){
    this.api.category().subscribe( (response:GETGallery) =>{
      this.categoriesList = response.galleries;
    })
  }

  //ANGULAR GET IMAGE OF GALLERY
  getImageSrc(fullpath: string): string {
    return `${environment.URL}/images/0x0/${fullpath}`;
  }

  //OPEN MODAL FOR SAVING NAME OF CATEGORY
  openModal() {
    this.modalRef = this.modalService.show(GalleryModalComponent);
  }
}