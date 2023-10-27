'use strict';

import { buildNotification } from './notificationView.js';

export const notificationController = (notifications) => {
  const showNotification = (type, message) => {
    notifications.classList.add(type);
    notifications.classList.add('active');
    notifications.innerHTML = buildNotification(message);
    setTimeout(() => {
      notifications.classList.remove('active');
      notifications.classList.remove(type);
      notifications.innerHTML = '';
    }, 2000);
  };

  return showNotification;
};
