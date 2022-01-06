import { DialogCategoryComponent } from './../dialog-category/dialog-category.component';
import { GALLERY } from './../gallery-photos/gallery';
import { Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['../style.sass']
})
export class GalleryComponent implements OnInit {

  gallery = GALLERY
  
  dialogRef!: MatDialogRef<any>;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  //angular popup
  openDialog(){
    this.dialogRef = this.dialog.open(DialogCategoryComponent,{
      width: '15%'
  });
  }
}