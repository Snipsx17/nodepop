'use strict';

import { listAdsController } from './listAdsController.js';
import { notificationController } from '../notifications/notificationController.js';
import { sessionController } from '../session/sessionController.js';

document.addEventListener('DOMContentLoaded', () => {
  const listAds = document.querySelector('#list-ads');
  const notifications = document.querySelector('#notifications');
  const showNotification = notificationController(notifications);
  sessionController();

  listAds.addEventListener('adsLoaded', (event) => {
    const { type, message } = event.detail;
    showNotification(type, message);
  });

  listAdsController(listAds);
});
