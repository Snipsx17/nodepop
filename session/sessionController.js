'use strict';

import {
  buildAuthorizedUserOptions,
  buildUnauthorizedUserOptions,
} from './sessionView.js';

import { isAuthorized } from '../session/sessionModel.js';

export const sessionController = () => {
  const token = isAuthorized();
  const navBar = document.querySelector('.nav');

  if (!token) {
    navBar.innerHTML = buildUnauthorizedUserOptions();
  } else {
    navBar.innerHTML = buildAuthorizedUserOptions();
    const logoutBtn = document.querySelector('#logout-btn');
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('jwt');
      sessionController();
    });
  }
};
