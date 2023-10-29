'use strict';

export const getAd = async (tweetId) => {
  const url = `http://127.0.0.1:8000/api/ads/${tweetId}?_expand=user`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteAd = async (adId) => {
  const url = `http://127.0.0.1:8000/api/ads/${adId}`;
  const token = localStorage.getItem('jwt');

  try {
    const response = await fetch(url, {
      method: 'delete',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    throw error;
  }
};
