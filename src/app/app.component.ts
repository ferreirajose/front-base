import { Component } from '@angular/core';
import { UserService } from '@core/user.service';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(
    private userService: UserService,
    private primengConfig: PrimeNGConfig
  ) { }


  async ngOnInit() {
    this.primengConfig.ripple = true;

    // Realiza o login usando o serviço de usuário
    await this.userService.login();

    // Subscreve ao evento de expiração do token
    this.userService.tokenExpiredObservable.subscribe(() => {
      console.warn('Token expirado, deslogando...');
    });
  }

}
