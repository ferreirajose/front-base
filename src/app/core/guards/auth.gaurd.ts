import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from '@core/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const expectedRole = route.data['role'];
    const isLoggedIn = await this.userService.isLoggedIn();
    const userRole = await this.userService.getUserRole();

    // Verifica se o usuário está autenticado e tem o papel necessário
    if (isLoggedIn && userRole && userRole === expectedRole) {
      return true;
    } else {
      // Redireciona para uma página de acesso negado caso o usuário não tenha permissão
      this.router.navigate(['/access-denied']);
      return false;
    }
  }
}
