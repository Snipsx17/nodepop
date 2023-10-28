'use strict';

export const loadSpinnerController = (loadSpinnerContainer) => {
  const showLoadSpinner = () => {
    loadSpinnerContainer.classList.add('active');
  };

  const hideLoadSpinner = () => {
    loadSpinnerContainer.classList.remove('active');
  };

  return {
    showLoadSpinner,
    hideLoadSpinner,
  };
};
