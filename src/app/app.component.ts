import { Component } from '@angular/core';
import { AgGridAngular} from 'ag-grid-angular';
import { ColDef} from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AgGridAngular],
  template: 
  `
    <!-- The AG Grid component -->
    <ag-grid-angular
    class="ag-theme-quartz" style='height:500px;width:100%'
    [rowData]="rowData" [columnDefs]="colDefs"/>
`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  rowData = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
];

// Column Definitions: Defines the columns to be displayed.
colDefs: ColDef[] = [
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" }
];
}
