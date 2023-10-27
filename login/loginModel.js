'use strict';

export const loginUser = async (email, password) => {
  const url = 'http://127.0.0.1:8000/auth/login';
  const body = { username: email, password };

  try {
    const response = await fetch(url, {
      method: 'post',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json',
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
