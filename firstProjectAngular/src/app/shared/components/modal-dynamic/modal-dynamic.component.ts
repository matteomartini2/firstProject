import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { project } from 'src/app/model/project';

@Component({
  selector: 'app-modal-dynamic',
  templateUrl: './modal-dynamic.component.html',
  styleUrls: ['./modal-dynamic.component.scss']
})
export class ModalDynamicComponent implements OnInit {

  element : project;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ModalDynamicComponent>) { this.element = this.data; }
  ngOnInit(): void {}


  conferma(){
    return this.dialogRef.close(true);
  }

  annulla(){
    return this.dialogRef.close(false);
  }

}
