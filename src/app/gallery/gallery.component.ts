import { DialogCategoryComponent } from '../dialog-category/dialog-category.component';
import { GALLERY } from '../gallery-photos/gallery';
import { Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../api/api.service';
import { GETCategoryFiles } from './gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['../style.sass']
})
export class GalleryComponent implements OnInit {

  gallery = GALLERY 

  dialogRef!: MatDialogRef<any>;

  public categoryList = <GETCategoryFiles[]>{};

  constructor(private dialog: MatDialog,
    private api: ApiService) { }
  
  ngOnInit() {
    this.api.category().subscribe( response =>{
      console.log(response);
      this.categoryList = response;
    });
  }

  //angular popup
  openDialog(){
    this.dialogRef = this.dialog.open(DialogCategoryComponent,{
      width: '15%'
  });
  }
}