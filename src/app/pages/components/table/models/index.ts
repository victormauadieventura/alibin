export interface Column {
  header?: string;
  field?: string;
  dataType?: 'text' | 'number' | 'date' | 'currency' | 'percentage';
  style?: { [className: string]: string };
}
