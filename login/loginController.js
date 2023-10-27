'use strict';

import { loginUser } from './loginModel.js';
import { customEventDispatch } from '../utils/customEventDispatch.js';

export const loginController = async (loginForm) => {
  const form = new FormData(loginForm);
  const email = form.get('email');
  const password = form.get('password');

  try {
    const jwt = await loginUser(email, password);
    localStorage.setItem('jwt', jwt.accessToken);
    customEventDispatch(
      'login',
      { type: 'success', message: 'Welcome to NodePop' },
      loginForm
    );

    setTimeout(() => {
      window.location = './index.html';
    }, 2000);
  } catch (error) {
    customEventDispatch(
      'login',
      { type: 'error', message: error.message },
      loginForm
    );
  }
};
