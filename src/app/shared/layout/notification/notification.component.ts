import { Component, OnInit, HostListener } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  isDropdownOpen = false;
  notifications: Array<any> = [];

  constructor(public notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notifications = this.notificationService.getNotifications();
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    if (this.isDropdownOpen) {
      this.notificationService.markAllAsRead();
    }
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown-container')) {
      this.isDropdownOpen = false;
    }
  }
}
