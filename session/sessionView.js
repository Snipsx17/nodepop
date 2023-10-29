'use strict';

export const buildAuthorizedUserOptions = () => {
  return `<li class="nav-item">
        <a href="./index.html" class="nav-link active" >Home</a>
    </li>
    <li class="nav-item">
        <a href="./new-ad.html" class="nav-link">Add new ad</a>
    </li>
    <li class="nav-item">
        <a id="logout-btn" href="./login.html" class="nav-link" >Logout</a>
    </li>`;
};

export const buildUnauthorizedUserOptions = () => {
  return `<li class="nav-item">
        <a href="#" class="nav-link active">Home</a>
    </li>
    <li class="nav-item">
        <a href="./register.html" class="nav-link">register</a>
    </li>
    <li class="nav-item">
        <a href="./login.html" class="nav-link">Login</a>
    </li>`;
};
