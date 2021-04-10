import { Component, Input, OnInit } from '@angular/core';
import { Column } from '../models';

@Component({
  selector: 'app-table-options',
  templateUrl: './table-options.component.html',
  styleUrls: ['./table-options.component.scss']
})
export class TableOptionsComponent implements OnInit {

  @Input() columns: Column[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedChange() {
    const selecteds: Column[] = this.columns.filter(intervention => intervention.selected);
  }
}
