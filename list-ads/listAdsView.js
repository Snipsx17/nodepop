'use strict';

export const buildAd = (item) => {
  const buildTags = (tagsList) => {
    let result = '';
    for (const tag of tagsList) {
      result += `<span class="badge rounded-pill">${tag}</span>`;
    }
    return result;
  };

  const tags = buildTags(item.tags);

  return `
  <div class="card">
  <a href="./ad-details.html?id=${item.id}">
          <img
            src="${item.picture || './public/no-pic.jpeg'}"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <span class="status badge rounded-pill">${item.status}</span>
            <h3 class="card-title">Price:${item.price}$</h3>
            <h4 class="card-title">${item.name}</h4>
            <p class="card-text">Description: ${item.description}</p>
          </div>
          <div class="card-tags">
            <h4>tags:</h4>
            ${tags}
          </div>
          </a>
        </div>
  `;
};

export const noAdsToList = () => {
  return `Nothing to show, login and start posting your ads`;
};
