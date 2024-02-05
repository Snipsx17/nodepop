'use strict';

import { deleteAd, getAd } from './adDetailModel.js';
import { buildAd, buildDeleteBtn } from './adDetailView.js';
import { customEventDispatch } from '../utils/customEventDispatch.js';

export const adDetailController = async (adDetail, jwt) => {
  const params = new URLSearchParams(window.location.search);
  const tweetId = params.get('id');

  if (tweetId) {
    try {
      const adData = await getAd(tweetId);
      adDetail.innerHTML = buildAd(adData);

      adData.user.id === jwt.userId ? addDeleteButton(tweetId, adDetail) : null;
    } catch (error) {
      console.log(error);
    }
  }
};

const addDeleteButton = (tweetId, adDetail) => {
  const deleteBtnContainer = document.querySelector('#delete-btn-container');
  deleteBtnContainer.innerHTML = buildDeleteBtn();

  const deleteBtn = document.querySelector('#delete-btn');
  deleteBtn.addEventListener('click', async () => {
    await deleteAd(tweetId);
    customEventDispatch(
      'adDeleted',
      { type: 'success', message: 'Ad was deleted' },
      adDetail
    );
  });
};
