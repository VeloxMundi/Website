const {html} = require('common-tags');

function Card({title, link, linkText, newWindow}) {
  return html`
  <a href="${link}" class="card__container" ${`${newWindow ? 'target="_blank"' : ''}`}>
    <div>
      <h4 class="card__title" style="color:#FFFFFF;">${title}</h4>
      <p class="card__text">${linkText}</p>
    </div>
  </a>
  `
}

module.exports = Card;