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
  }
}
