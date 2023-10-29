'use strict';

export const buildAd = (adData) => {
  const buildTags = (tagsList) => {
    let result = '';
    for (const tag of tagsList) {
      result += `<span class="badge rounded-pill">${tag}</span>`;
    }
    return result;
  };

  const tags = buildTags(adData.tags);
  return `
    <div class="ad-img">
          <img
            src="${adData.picture || './public/no-pic.jpeg'}"
            alt=""
          />
        </div>
        <div class="details">
          <div class="card-body">
            <span class="status badge rounded-pill">${adData.status}</span>
            <h3 class="card-title">Price:${adData.price}$</h3>
            <h4 class="card-title">${adData.name}</h4>
            <p class="card-text">Description: ${adData.description}</p>
          </div>
          <div class="card-tags">
            <h4>tags:</h4>
            ${tags}
          </div>
          <div id="delete-btn-container">
          </div>
          
        </div>
    `;
};

export const buildDeleteBtn = () => {
  return `<button id="delete-btn" class="btn btn-primary">Delete</button>`;
};
