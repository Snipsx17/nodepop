'use strict';

import { loadSpinnerController } from '../load-spinner/loadSpinnerController.js';
import { customEventDispatch } from '../utils/customEventDispatch.js';
import { createUser } from './registerModel.js';

export const registerController = async (registerForm) => {
  const form = new FormData(registerForm);
  const email = form.get('email');
  const password = form.get('password');
  const passwordConfirmation = form.get('password-confirmation');
  const loadSpinner = document.querySelector('.loader-container');
  const { showLoadSpinner, hideLoadSpinner } =
    loadSpinnerController(loadSpinner);
  let userData;

  try {
    userData = validateForm(email, password, passwordConfirmation);
    showLoadSpinner();
    await createUser(userData);
    customEventDispatch(
      'userRegistration',
      {
        type: 'success',
        message: 'User was registered',
      },
      registerForm
    );
    setTimeout(() => {
      window.location = './login.html';
    }, 1000);
  } catch (error) {
    customEventDispatch(
      'userRegistration',
      {
        type: 'error',
        message: error.message,
      },
      registerForm
    );
  } finally {
    hideLoadSpinner();
  }
};

const validateForm = (email, password, passwordConfirmation) => {
  if (!isValidEmail(email)) {
    throw new Error('Introduce a valid Email!');
  }
  if (!isValidPassword(password, passwordConfirmation)) {
    throw new Error("Password's should be equals!");
  }

  return {
    username: email,
    password,
  };
};

const isValidEmail = (email) => {
  const emailRegex = new RegExp(`^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$`);
  return emailRegex.test(email);
};

const isValidPassword = (password, passwordConfirmation) => {
  return password === passwordConfirmation;
};
