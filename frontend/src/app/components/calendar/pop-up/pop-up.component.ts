import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppointmentFormDialogComponent } from './appointment-form-dialog/appointment-form-dialog.component';

export interface DialogData {
  title: string;
}

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css'],
})
export class PopUpComponent {
  public title: string = '';

  constructor(public dialog: MatDialog) {}

  createNewAppointment(): void {
    const dialogRef = this.dialog.open(AppointmentFormDialogComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
