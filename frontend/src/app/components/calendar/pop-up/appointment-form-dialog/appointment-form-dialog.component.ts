import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  title: string;
  date: string;
}

@Component({
  selector: 'app-appointment-form-dialog',
  templateUrl: './appointment-form-dialog.component.html',
  styleUrls: ['./appointment-form-dialog.component.css'],
})
export class AppointmentFormDialogComponent {
  constructor(public dialogRef: MatDialogRef<AppointmentFormDialogComponent>) {}

  cancel(): void {
    this.dialogRef.close();
  }
}
