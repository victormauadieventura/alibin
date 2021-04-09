import { Component, Input, OnInit } from '@angular/core';
import { Column } from './models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() data: any[] = [];
  @Input() columns: Column[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.columns);
  }

  onSelectedChange() {
    const selecteds: Column[] = this.columns.filter(intervention => intervention.selected);
    console.log(selecteds);
    // this.selectedChange.emit(selecteds);
  }

}
