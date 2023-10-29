'use strict';

export const createNewAd = async (newAdData) => {
  const url = 'http://127.0.0.1:8000/api/ads';
  const jwt = localStorage.getItem('jwt');

  const body = newAdData;
  try {
    const response = await fetch(url, {
      method: 'post',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};
