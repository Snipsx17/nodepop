'use strict';
import { notificationController } from '../notifications/notificationController.js';
import { loginController } from './loginController.js';

document.addEventListener('DOMContentLoaded', () => {
  const notifications = document.querySelector('#notifications');
  const showNotifications = notificationController(notifications);
  const loginForm = document.querySelector('#login-form');

  loginForm.addEventListener('login', (event) => {
    const { type, message } = event.detail;
    showNotifications(type, message);
  });

  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    await loginController(loginForm);
  });
});
