import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ApiService } from 'src/app/api/api.service';
import { AddCategory, GETCategoryFiles, GETGallery } from 'src/app/model/gallery';

@Component({
  selector: 'app-gallery-modal',
  templateUrl: './gallery-modal.component.html',
  styleUrls: ['../../style.sass']
})
export class GalleryModalComponent implements OnInit {

  constructor( private api: ApiService,) { }

  
  modalRef?: BsModalRef;

  config = {
    animated: true
  };
  name: FormControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z ]*$'),Validators.maxLength(15)]);

  showError=false;

  variable = <AddCategory>{};
  
  categoriesList: GETCategoryFiles[] = [];

  ngOnInit(): void {
  }

  getCategory(){
    this.api.category().subscribe( (response:GETGallery) =>{
      this.categoriesList = response.galleries;
    })
  }
  // SAVE THE NAME OF THE CATEGORY
  saveCategory(){
    if(!this.name.value){
      this.showError=true;
      return;
    }
    else{
      this.variable.name=this.name.value;
      this.api.categoryAdd(this.variable).subscribe(response=>{this.getCategory});
      this.reset();
      this.showError=false;
      this.modalRef?.hide();
      window.setTimeout(function(){location.reload()},300);
    }
  }
  
  //RESET MODALS ATRIBUTES
  reset(){
    this.name.reset();
  }

}
