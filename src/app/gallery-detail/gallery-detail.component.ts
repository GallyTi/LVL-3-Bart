import { DialogFotkyComponent } from './../dialog-fotky/dialog-fotky.component';
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

  items!: GalleryItem[];
  dialogRef!: MatDialogRef<any>;


  imageData = GALLERYDETAIL

  constructor(public gallery: Gallery, private dialog: MatDialog) { }

  ngOnInit(): void {

    this.items = this.imageData.map(item => new ImageItem({ src: item.url, thumb: item.url }));

    // Get a lightbox gallery ref
    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);

  }

  //angular popup
  openDialog(){
    this.dialogRef = this.dialog.open(DialogFotkyComponent,{
      width: '30%'
  });
  }



}
