import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";

@Component({
  selector: 'app-dialog2',
  templateUrl: './dialog2.component.html',
  styleUrl: './dialog2.component.css'
})
export class Dialog2Component {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogComponent>) {}

closeDialog() {
  this.dialogRef.close();
}
}
