import { DialogPhotoComponent } from '../dialog-photo/dialog-photo.component';
import { GALLERYDETAIL } from './../gallery-photos/gallery-detail';
import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import {MatDialog, MatDialogRef} from '@angular/material/dialog'


@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['../style.sass']
})
export class GalleryDetailComponent implements OnInit {

  dialogRef!: MatDialogRef<any>;


  imageData = GALLERYDETAIL

  constructor(public gallery: Gallery, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  //angular popup
  openDialog(){
    this.dialogRef = this.dialog.open(DialogPhotoComponent,{
      width: '30%'
  });
  }



}
