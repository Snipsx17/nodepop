'use strict';

import { adDetailController } from './adDetailController.js';
import { sessionController } from '../session/sessionController.js';
import { decodeToken } from '../utils/decodeToken.js';
import { notificationController } from '../notifications/notificationController.js';

document.addEventListener('DOMContentLoaded', () => {
  const token = localStorage.getItem('jwt');
  if (!token) {
    window.location = './index.html';
  }
  const jwt = decodeToken(token);
  const adDetail = document.querySelector('.ad-detail');
  const notifications = document.querySelector('#notifications');
  const showNotification = notificationController(notifications);

  adDetail.addEventListener('adDeleted', (event) => {
    const { type, message } = event.detail;
    showNotification(type, message);
    setTimeout(() => {
      window.location = './index.html';
    }, 1000);
  });

  sessionController();
  adDetailController(adDetail, jwt);
});
