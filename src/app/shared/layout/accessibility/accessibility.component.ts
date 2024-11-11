import { Component, OnInit } from '@angular/core';
import { MenuService } from '../app.menu.service';
import { LayoutService } from '../service/app.layout.service';

@Component({
  selector: 'app-accessibility',
  templateUrl: './accessibility.component.html',
  styleUrls: ['./accessibility.component.scss']
})
export class AccessibilityComponent {

  scales: number[] = [12, 13, 14, 15, 16];
  isDarkTheme: boolean = false;

  constructor(
      public layoutService: LayoutService,
      public menuService: MenuService
  ) {
    console.log( this.layoutService.config().scale)
  }

  get visible(): boolean {
      return this.layoutService.state.configSidebarVisible;
  }
  set visible(_val: boolean) {
      this.layoutService.state.configSidebarVisible = _val;
  }

  get scale(): number {
      return this.layoutService.config().scale;
  }
  set scale(_val: number) {
      this.layoutService.config.update((config) => ({
          ...config,
          scale: _val,
      }));
  }

  get menuMode(): string {
      return this.layoutService.config().menuMode;
  }
  set menuMode(_val: string) {
      this.layoutService.config.update((config) => ({
          ...config,
          menuMode: _val,
      }));
  }

  get inputStyle(): string {
      return this.layoutService.config().inputStyle;
  }
  set inputStyle(_val: string) {
      this.layoutService.config().inputStyle = _val;
  }

  get ripple(): boolean {
      return this.layoutService.config().ripple;
  }
  set ripple(_val: boolean) {
      this.layoutService.config.update((config) => ({
          ...config,
          ripple: _val,
      }));
  }

  set theme(val: string) {
      this.layoutService.config.update((config) => ({
          ...config,
          theme: val,
      }));
  }
  get theme(): string {
      return this.layoutService.config().theme;
  }

  set colorScheme(val: string) {
      this.layoutService.config.update((config) => ({
          ...config,
          colorScheme: val,
      }));
  }
  get colorScheme(): string {
      return this.layoutService.config().colorScheme;
  }

  onConfigButtonClick() {
      this.layoutService.showConfigSidebar();
  }

  changeTheme(theme: string, colorScheme: string) {
      this.theme = theme;
      this.colorScheme = colorScheme;
  }

  decrementScale() {
      this.scale--;
  }

  incrementScale() {
      this.scale++;
  }

  resetScale() {
    this.scale = 14; // valor inicial das fontes
  }

  toggleTheme() {
    console.log('dads')
    if (this.isDarkTheme) {
      this.changeTheme('bootstrap4-dark-blue', 'dark');
    } else {
      this.changeTheme('bootstrap4-light-blue', 'light');
    }
}

}
