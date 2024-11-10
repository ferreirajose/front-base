import { Injectable } from '@angular/core';
import { KeycloakEventType, KeycloakService } from 'keycloak-angular';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private tokenExpired$ = new Subject<void>();

  constructor(private keycloakService: KeycloakService) {
    this.setupTokenUpdate();
  }

  /**
   * Configura a atualização automática do token quando expirar.
   */
  private setupTokenUpdate(): void {
    this.keycloakService.keycloakEvents$.subscribe(event => {
      if (event.type === KeycloakEventType.OnTokenExpired) {
        this.updateToken();
      }
    });
  }

  /**
   * Realiza o login do usuário.
   */
  async login(): Promise<void> {
    if (!(await this.keycloakService.isLoggedIn())) {
      await this.keycloakService.login();
    }
  }

  /**
   * Verifica se o usuário está autenticado.
   */
  async isLoggedIn(): Promise<boolean> {
    return this.keycloakService.isLoggedIn();
  }

  /**
   * Obtém as ROLES do usuário autenticado.
   */
  async getUserRole(): Promise<string | null> {
    if (await this.isLoggedIn()) {
      const roles = this.keycloakService.getUserRoles();
      return roles.length > 0 ? roles[0] : null;
    }
    return null;
  }

  /**
   * Obtém o nome do usuário autenticado.
   */
  async getUserName(): Promise<string | null> {
    if (await this.isLoggedIn()) {
      const userProfile = await this.keycloakService.loadUserProfile();
      return userProfile?.username ?? null; // Retorna null se username for undefined
    }
    return null;
  }

  /**
   * Desloga o usuário do Keycloak e redireciona para a página especificada.
   */
  async logout(redirectUri: string = location.origin): Promise<void> {
    await this.keycloakService.logout(redirectUri);
  }

  /**
   * Atualiza o token do Keycloak.
   */
  private async updateToken(): Promise<void> {
    try {
      await this.keycloakService.updateToken(30);
    } catch (error) {
      console.error('Falha ao renovar o token', error);
      this.tokenExpired$.next(); // Notifica sobre a expiração do token
      await this.logout();
    }
  }

  /**
   * Retorna um Observable para eventos de expiração de token.
   */
  get tokenExpiredObservable(): Observable<void> {
    return this.tokenExpired$.asObservable();
  }
}
