'use strict';

import { getAds } from './listAdsModel.js';
import { buildAd, noAdsToList } from './listAdsView.js';
import { customEventDispatch } from '../utils/customEventDispatch.js';
import { loadSpinnerController } from '../load-spinner/loadSpinnerController.js';

export const listAdsController = async (listAds) => {
  const loadSpinner = document.querySelector('.loader-container');
  const { showLoadSpinner, hideLoadSpinner } =
    loadSpinnerController(loadSpinner);

  try {
    showLoadSpinner();
    const ads = await getAds();
    if (ads.length === 0) {
      listAds.innerHTML = noAdsToList();
      listAds.style.display = 'block';
    } else {
      let adsHTML = '';
      listAds.style.display = 'grid';
      for (let item of ads) {
        adsHTML += buildAd(item);
      }
      listAds.innerHTML = adsHTML;
    }
    customEventDispatch(
      'adsLoaded',
      {
        type: 'success',
        message: 'Ads where loaded',
      },
      listAds
    );
  } catch (error) {
    customEventDispatch(
      'adsLoaded',
      {
        type: 'error',
        message: error.message,
      },
      listAds
    );
  } finally {
    hideLoadSpinner();
  }
};
