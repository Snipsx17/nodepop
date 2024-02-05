'use strict';

import { deleteAd, getAd } from './adDetailModel.js';
import { buildAd, buildDeleteBtn } from './adDetailView.js';
import { customEventDispatch } from '../utils/customEventDispatch.js';

export const adDetailController = async (adDetail, jwt) => {
  const params = new URLSearchParams(window.location.search);
  const advertId = params.get('id');

  if (advertId) {
    try {
      const adData = await getAd(advertId);
      adDetail.innerHTML = buildAd(adData);
      if (jwt) {
        adData.user.id === jwt.userId
          ? addDeleteButton(advertId, adDetail)
          : null;
      }
    } catch (error) {
      console.log(error);
    }
  }
};

const addDeleteButton = (advertId, adDetail) => {
  const deleteBtnContainer = document.querySelector('#delete-btn-container');
  deleteBtnContainer.innerHTML = buildDeleteBtn();

  const deleteBtn = document.querySelector('#delete-btn');
  deleteBtn.addEventListener('click', async () => {
    if (window.confirm('You will delete the advert, do you want continue?')) {
      await deleteAd(advertId);
      customEventDispatch(
        'adDeleted',
        { type: 'success', message: 'Ad was deleted' },
        adDetail
      );
    }
  });
};
