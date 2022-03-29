import { GETCategoryFiles, GETGallery, GETImagesFiles, GETImagesOfGallery } from './../model/gallery';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { ApiService } from '../api/api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { animate, style, transition, trigger, AnimationEvent } from '@angular/animations';


@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['../style.sass'],
  animations:[
    trigger('animation',[
      transition('void=>visible',[
        style({transform: 'scale(0.5)'}),
        animate('150ms', style({transform:'scale(1)'}))]),
      transition('void=>visible',[
        style({transform: 'scale(1'}),
        animate('150ms', style({transform:'scale(0.5)'}))]),
    ]),
    trigger('animation_leave',[
      transition(':leave',[
        style({opacity:1}),
        animate('250ms', style({opacity:0.8}))]),
    ]),
  ]
})
export class GalleryDetailComponent implements OnInit {

  constructor(private api: ApiService, private route: ActivatedRoute, private modalService: BsModalService) { }

  config = {
    animated: true,
  };
  modalRef?: BsModalRef;
  imagesList: GETImagesFiles[]= [];
  path! :string;
  nameGallery!:any;
  selectedFiles?: FileList;
  progressInfos: any[] = [];
  message: string[] = [];
  fileInfos?: Observable<any>;
  file! : File;

  previewImage=false;
  showMask= false;
  currentLightBoxImage: GETImagesFiles = this.imagesList[0];
  currentIndex=0;
  controls = true;
  index!: number;

  @Output() numberOfImages= this.index;

  ngOnInit(): void {
    this.route.params.subscribe(params=> (
      this.path= params['path'],
      this.getPhotos()
    ));
    this.nameGallery =this.route.snapshot.paramMap.get('name')
  }

  getPhotos = () =>{
    return this.api.image(this.path).subscribe( (response:GETImagesOfGallery) =>{
      this.imagesList = response.images;
    })
  }

  getImageSrc(fullpath: string): string {
    return `${environment.URL}/images/0x0/${fullpath}`;
  }

  onPreviewImage(index: number):void{
    this.showMask=true;
    this.previewImage=true;
    this.currentLightBoxImage=this.imagesList[index];
  }

  onAnimationEnd(event: AnimationEvent){
    if(event.toState=== 'void'){
      this.showMask=false;
    }
  }

  onClosePreview(){
    this.previewImage =false
  }

  nextImage():void{
    this.currentIndex = this.currentIndex+1;
    if(this.currentIndex>this.imagesList.length-1){
      this.currentIndex = 0;
    }
    this.currentLightBoxImage = this.imagesList[this.currentIndex];
  }

  prevImage():void{
    this.currentIndex = this.currentIndex-1;
    if(this.currentIndex<0){
      this.currentIndex=this.imagesList.length-1;
    }
    this.currentLightBoxImage = this.imagesList[this.currentIndex];
  }

  // openModal() {
  //   this.modalRef = this.modalService.show(GalleryDetailModalComponent);
  // }


  openModal(fotografia: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      fotografia, 
      this.config
      );
  }

  getFiles(event:any): void{
    this.message = [];
    this.progressInfos = [];
    this.selectedFiles = event.target.files;
  }

  uploadImages(): void{
    if(this.selectedFiles){
      for(let i=0; i<this.selectedFiles.length;i++){
        this.upload(this.path, i, this.selectedFiles[i]);
      }
    }
  }

  upload(path: string, idx:number, file:File): void{
    this.progressInfos[idx] = { value: 0, fileName: file.name };
    if (file) {
      this.api.addImages(this.path,file).subscribe(
        (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            const msg = 'Uploaded the file successfully: ' + file.name;
            this.message.push(msg);
            this.fileInfos= this.api.image(this.path);
            this.modalRef?.hide();
            window.location.reload();
          }
        },
        (err: any) => {
          this.progressInfos[idx].value = 0;
          const msg = 'Could not upload the file: ' + file.name;
          this.message.push(msg);
          this.fileInfos= this.api.image(this.path);
        });
  }

}

}
