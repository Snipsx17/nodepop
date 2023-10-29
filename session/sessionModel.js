'use strict';

export const isAuthorized = () => {
  const jwt = localStorage.getItem('jwt');
  return jwt;
};
