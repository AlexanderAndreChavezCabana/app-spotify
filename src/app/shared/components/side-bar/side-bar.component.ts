import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AccesslinkModel } from '@shared/models/access-link-model';
import { DefaultOptionModel } from '@shared/models/default-options-model';
import { CustomOptionModel } from '@shared/models/custom-option-model';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  mainOptions: {
    defaultOptions: DefaultOptionModel[];
    accessLinks: AccesslinkModel[];
  } = {
    defaultOptions: [],
    accessLinks: [],
  };

  customOptions: CustomOptionModel[] = [];

  constructor() {}

  ngOnInit(): void {
    this.mainOptions.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/', 'auth'],
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history'],
      },
      {
        name: 'Tu biblioteca',
        icon: 'uil uil-favorite',
        router: ['/', 'favorite'],
      },
    ];

    this.mainOptions.accessLinks = [
      {
        name: 'Crear lista',
        icon: 'uil uil-plus-square',
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil uil-heart-medical',
      },
    ];

    this.customOptions = [
      {
        name: 'Mi lista º1',
        router: ['/'],
      },
      {
        name: 'Mi lista º2',
        router: ['/'],
      },
      {
        name: 'Mi lista º3',
        router: ['/'],
      },
      {
        name: 'Mi lista º4',
        router: ['/'],
      },
    ];
  }
}
