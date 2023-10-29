'use strict';

import { customEventDispatch } from '../utils/customEventDispatch.js';
import { createNewAd } from './newAdModel.js';
import { loadSpinnerController } from '../load-spinner/loadSpinnerController.js';

export const newAddController = async (newAdForm) => {
  const loadSpinnerContainer = document.querySelector('.loader-container');
  const { showLoadSpinner, hideLoadSpinner } =
    loadSpinnerController(loadSpinnerContainer);
  const form = new FormData(newAdForm);
  const name = form.get('name');
  const description = form.get('description');
  const picture = form.get('picture');
  const price = form.get('price');
  const tags = form.get('tags').split(',');
  const status = form.get('status');

  const adData = {
    name,
    description,
    picture,
    price,
    tags,
    status,
  };

  try {
    showLoadSpinner();
    const response = await createNewAd(adData);
    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message);
    }
    customEventDispatch(
      'adCreated',
      { type: 'success', message: 'your ad was create!' },
      newAdForm
    );
  } catch (error) {
    customEventDispatch(
      'adCreated',
      { type: 'error', message: error.message },
      newAdForm
    );
  } finally {
    hideLoadSpinner();
  }

  // regirijo al inicio
};
