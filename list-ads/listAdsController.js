'use strict';

import { getAds } from './listAdsModel.js';
import { buildAd } from './listAdsView.js';

export const listAdsController = async (listAds) => {
  try {
    const ads = await getAds();
    let adsHTML = '';
    for (let item of ads) {
      adsHTML += buildAd(item);
    }
    listAds.innerHTML = adsHTML;
  } catch (error) {}
};
