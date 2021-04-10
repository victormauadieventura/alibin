import { Component, OnInit } from '@angular/core';
import { Column } from '../components/table/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  columns: Column[] = [
    {
      header: 'Nº Cliente',
      field: 'id',
      dataType: 'number',
      selected: true
    },
    {
      header: 'Cliente',
      field: 'client',
      dataType: 'text',
      style: {
        'text-transform': 'uppercase'
      },
      selected: true
    },
    {
      header: 'QTD. Chargeback',
      field: 'quantity_chargeback',
      dataType: 'number',
      style: {
        'text-align': 'center'
      },
      selected: true
    },
    {
      header: 'Valor Chargeback',
      field: 'amount_chargeback',
      dataType: 'currency',
      selected: true
    },
    {
      header: 'QTD. Vendas',
      field: 'quantity_sales',
      dataType: 'number',
      style: {
        'text-align': 'center'
      },
      selected: true
    },
    {
      header: 'Valor Total',
      field: 'total_amount',
      dataType: 'currency',
      selected: true
    },
    {
      header: '% Chargeback',
      field: 'chargeback',
      dataType: 'percentage',
      style: {
        'text-align': 'center',
        'color': '#e2756f'
      },
      selected: true
    },
    {
      header: '% Total Chargeback',
      field: 'total_chargeback',
      dataType: 'percentage',
      style: {
        'text-align': 'center',
        'color': '#e2756f'
      },
      selected: true
    },
  ];

  data: any[] = [
    {
      id: 6542,
      client: 'Orzin Onxir',
      quantity_chargeback: 1,
      amount_chargeback: 38.92,
      quantity_sales: 72,
      total_amount: 32000.75,
      chargeback: 0.05,
      total_chargeback: 0.03,
    },
    {
      id: 5896,
      client: 'Doben Bugel',
      quantity_chargeback: 1,
      amount_chargeback: 48.92,
      quantity_sales: 58,
      total_amount: 17000.75,
      chargeback: 0.05,
      total_chargeback: 0.03,
    },
    {
      id: 5468,
      client: 'Boen Naoweur',
      quantity_chargeback: 1,
      amount_chargeback: 38.92,
      quantity_sales: 26,
      total_amount: 8000.75,
      chargeback: 0.05,
      total_chargeback: 0.03,
    },
    {
      id: 6542,
      client: 'Orzin Onxir',
      quantity_chargeback: 1,
      amount_chargeback: 38.92,
      quantity_sales: 72,
      total_amount: 32000.75,
      chargeback: 0.05,
      total_chargeback: 0.03,
    },
    {
      id: 5896,
      client: 'Doben Bugel',
      quantity_chargeback: 1,
      amount_chargeback: 48.92,
      quantity_sales: 58,
      total_amount: 17000.75,
      chargeback: 0.05,
      total_chargeback: 0.03,
    },
    {
      id: 5468,
      client: 'Boen Naoweur',
      quantity_chargeback: 1,
      amount_chargeback: 38.92,
      quantity_sales: 26,
      total_amount: 8000.75,
      chargeback: 0.05,
      total_chargeback: 0.03,
    },{
      id: 6542,
      client: 'Orzin Onxir',
      quantity_chargeback: 1,
      amount_chargeback: 38.92,
      quantity_sales: 72,
      total_amount: 32000.75,
      chargeback: 0.05,
      total_chargeback: 0.03,
    },
    {
      id: 5896,
      client: 'Doben Bugel',
      quantity_chargeback: 1,
      amount_chargeback: 48.92,
      quantity_sales: 58,
      total_amount: 17000.75,
      chargeback: 0.05,
      total_chargeback: 0.03,
    },
    {
      id: 5468,
      client: 'Boen Naoweur',
      quantity_chargeback: 1,
      amount_chargeback: 38.92,
      quantity_sales: 26,
      total_amount: 8000.75,
      chargeback: 0.05,
      total_chargeback: 0.03,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
