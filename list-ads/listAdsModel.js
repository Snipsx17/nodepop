'use strict';

export const getAds = async () => {
  const url = 'http://127.0.0.1:8000/api/ads';

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {}
};
