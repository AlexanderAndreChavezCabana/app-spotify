import { Component, OnInit } from '@angular/core';
import { LinkMenuModel } from '@shared/models/link-menu-model';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  linksMenu: Array<LinkMenuModel> = [
    {
      name: 'Home',
      icon: 'uil-estate',
      router: ['/', 'auth'],
    },
    {
      name: 'Buscar',
      icon: 'uil-search',
      router: ['/', 'history'],
    },
    {
      name: 'Tu biblioteca',
      icon: 'uil-favorite',
      router: ['/', 'favorite'],
    },
    {
      name: 'Crear lista',
      icon: '',
      router: ['/', 'favorite'],
    },
    {
      name: 'Canciones que te gustan',
      icon: '',
      router: ['/', 'favorite'],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
