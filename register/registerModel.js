'use strict';

export const createUser = async (userData) => {
  const url = 'http://127.0.0.1:8000/auth/register';

  try {
    const response = await fetch(url, {
      method: 'post',
      body: JSON.stringify(userData),
      headers: {
        'Content-type': 'application/json',
      },
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message);
    }
  } catch (error) {
    throw error;
  }
};
