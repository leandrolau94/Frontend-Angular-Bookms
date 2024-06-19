import { Component } from '@angular/core';
import { Menuli } from '../menuli';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(){};

  menuList: Menuli[] = [
    {
      label: "Añadir Libro",
      route: "/add",
    },
    {
      label: "Eliminar Libro",
      route: "/books",
    },
    {
      label: "Ver Listado Libros",
      route: "/books",
    },
    {
      label: "Pedir Prestado",
      route: "/books",
    },
    {
      label: "Devolver",
      route: "/books",
    },
  ];

}
