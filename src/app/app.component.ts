import { Component } from '@angular/core';
import { KeycloakEventType, KeycloakService } from 'keycloak-angular';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(
    private keycloakService: KeycloakService,
    private primengConfig: PrimeNGConfig
  ) { }

    async ngOnInit() {
        this.primengConfig.ripple = true;

        if (!this.keycloakService.isLoggedIn()) {
          await this.keycloakService.login();
          return;
        }

        this.updateToken();
    }


  private updateToken() {
    this.keycloakService.keycloakEvents$.subscribe({
      next: (event) => {
        if (event.type == KeycloakEventType.OnTokenExpired) {
          this.keycloakService.updateToken(30).catch((erro) => {
            console.error('Falha ao renovar o token', erro)
            this.keycloakLogout();
          });
        }
      }
    });
  }

  private keycloakLogout(): void {
    let redirectUri = location.origin;
    if (location.pathname) {
      redirectUri += location.pathname;
    }

    this.keycloakService.logout(redirectUri);
  }

}
