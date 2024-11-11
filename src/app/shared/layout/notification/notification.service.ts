import { Injectable } from '@angular/core';

interface User {
  name: string;
  imageUrl: string;
}

interface Notification {
  user: User;
  action: string;
  target: string;
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notifications: Notification[] = [
    {
      user: { name: "Fauzan Khan", imageUrl: "https://via.placeholder.com/32" },
      action: "upvoted",
      target: "your answer",
      timestamp: new Date(Date.now() - 1000 * 60 * 10) // 10 minutos atrás
    },
    {
      user: { name: "Keanu Reeves", imageUrl: "https://via.placeholder.com/32" },
      action: "promoted",
      target: "your post",
      timestamp: new Date(Date.now() - 1000 * 60 * 30) // 30 minutos atrás
    },
    {
      user: { name: "Natalie Portman", imageUrl: "https://via.placeholder.com/32" },
      action: "shared",
      target: "your question",
      timestamp: new Date(Date.now() - 1000 * 60 * 60) // 1 hora atrás
    }
  ];

  constructor() {}

  getNotifications(): Notification[] {
    return this.notifications;
  }

  markAllAsRead() {
    this.notifications = [];
  }
}
