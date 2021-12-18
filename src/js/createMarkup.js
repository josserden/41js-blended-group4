export const createMarkup = ({ description }) => {
  return `<li class="col card text-white bg-secondary">
            <div class="card-header">My Todo</div>
            <div class="card-body">
              <p class="card-text">${description}</p>
            </div>
            <button type="button" class="btn btn-danger small js-delete-btn">Danger</button>
          </li>`;
};
