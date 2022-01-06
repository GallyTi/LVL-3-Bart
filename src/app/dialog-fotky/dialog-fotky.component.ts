import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-fotky',
  templateUrl: './dialog-fotky.component.html',
  styleUrls: ['../style.sass']
})
export class DialogFotkyComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<any>) { }

  ngOnInit(): void {
    this.dialogRef.updateSize('30%', 'auto');
  }

}
