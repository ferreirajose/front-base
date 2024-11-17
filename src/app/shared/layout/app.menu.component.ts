import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
  model: any[] = [];

  constructor(public layoutService: LayoutService) {}

  ngOnInit() {
    this.model = [
      {
        label: 'Dashboard',
        items: [
          {
            label: 'Dashboard',
            icon: 'pi pi-fw pi-home',
            routerLink: ['/dashboard'],
          },
        ],
      },
      {
        label: 'Crud',
        items: [
          { label: 'Crud', icon: 'pi pi-fw pi-pencil', routerLink: ['/crud'] },
        ],
      },
      {
        label: 'Hierarquia',
        items: [
          {
            label: 'Publicação',
            icon: 'pi pi-fw pi-bookmark',
            items: [
              {
                label: 'Gerenciar Publicação',
                icon: 'pi pi-fw pi-bookmark',
                routerLink: ['/gerenciar-publicacao']
              },
            ],
          },
          {
            label: 'Calander',
            icon: 'pi pi-fw pi-calendar',
            routerLink: ['/calendar']
          },
        ],
      },
    ];
  }
}
