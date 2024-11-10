import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
    styleUrls: ['app.topbar.component.scss'],
})
export class AppTopBarComponent {

    items!: MenuItem[];
    hide = true;
    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    @ViewChild('profile', { static: false }) profileRef!: ElementRef;
    @ViewChild('menu', { static: false }) menuRef!: ElementRef;

    constructor(public layoutService: LayoutService,
      public router: Router,
      private keycloakService: KeycloakService,
    ) { }


    ngAfterViewInit(): void {
      if (!this.profileRef || !this.menuRef) return;

      this.profileRef.nativeElement.addEventListener('click', () => {
        this.menuRef.nativeElement.classList.toggle('active');
      });
    }

    logout() {
      let redirectUri = location.origin;
      if (location.pathname) {
        redirectUri += location.pathname;
      }

      this.keycloakService.logout(redirectUri);
    }

    show() {
      this.hide = !this.hide;
    }
}
