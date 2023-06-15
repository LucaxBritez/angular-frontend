import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

/* "Component" que marca esta clase TypeScript como un componente Angular y proporciona la 
configuración de metadatos que determina cómo debe ser procesado e interpretado el componente 
en tiempo de ejecución.

El decorador "Component" tiene tres atributos: "selector", "templateUrl" y "styleUrls". Utilizamos 
"selector" para especificar el nombre de la etiqueta HTML personalizada que reemplazará a este 
componente en tiempo de ejecución. También se especifica la plantilla HTML y los archivos CSS asociados 
al componente. */
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  employees: Employee[];
  
  constructor(){}

  ngOnInit(): void {
    
  }

}
