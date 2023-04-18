import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
})
export class DatePickerComponent implements OnInit {
  public selectedDate: Date = new Date();

  constructor() {
    this.selectedDate;
  }

  ngOnInit(): void {
    this.selectedDate;
  }

  handleDatePicker(selected: Date): void {
    console.log(selected);
    // selectDayByDatePicker(selected);
  }

  disableWeekendsFilter = (d: Date): boolean => {
    return d.getDay() !== 0 && d.getDay() !== 6;
  };
}
