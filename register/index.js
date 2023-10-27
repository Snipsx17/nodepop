'use strict';

import { notificationController } from '../notifications/notificationController.js';
import { registerController } from './registerController.js';

document.addEventListener('DOMContentLoaded', () => {
  const notifications = document.querySelector('#notifications');
  const showNotifications = notificationController(notifications);
  const registerForm = document.querySelector('#register-form');

  registerForm.addEventListener('userRegistration', (event) => {
    const { type, message } = event.detail;
    showNotifications(type, message);
  });

  registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    registerController(registerForm);
  });
});
