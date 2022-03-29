import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api/api.service';
import { GETImagesFiles } from 'src/app/model/gallery';

@Component({
  selector: 'app-gallery-detail-modal',
  templateUrl: './gallery-detail-modal.component.html',
  styleUrls: ['./gallery-detail-modal.component.sass']
})
export class GalleryDetailModalComponent implements OnInit {

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

  constructor(private api: ApiService, private route: ActivatedRoute, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=> (
      this.path= params['path']
    ));
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
            console.log('upload', this.fileInfos);
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
