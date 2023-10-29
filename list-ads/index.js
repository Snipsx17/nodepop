'use strict';

import { listAdsController } from './listAdsController.js';

document.addEventListener('DOMContentLoaded', () => {
  const listAds = document.querySelector('#list-ads');

  listAdsController(listAds);
});
