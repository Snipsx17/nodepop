'use strict';

import { notificationController } from '../notifications/notificationController.js';
import { sessionController } from '../session/sessionController.js';
import { newAddController } from './newAdController.js';

document.addEventListener('DOMContentLoaded', () => {
  const notifications = document.querySelector('#notifications');
  const showNotification = notificationController(notifications);
  const newAdForm = document.querySelector('#new-ad-form');
  sessionController();
  const token = localStorage.getItem('jwt');

  if (!token) {
    window.location = './index.html';
  }

  newAdForm.addEventListener('adCreated', (event) => {
    const { type, message } = event.detail;
    showNotification(type, message);
  });

  newAdForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    await newAddController(newAdForm);
  });
});
