export const createCard = ({ trips, _id, name, airline }) => {
  return `
  <div class="row">
      <div class="col s12 m6" id=${_id}>
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
          <span class="card-title">${name}</span>
          <p>Airline</p>
            <p>
              ${airline[0].name}
            </p>
            <p>
              ${airline[0].country}
            </p>
          </div>
          <div class="card-action">
            <p >trip: ${trips}</p>
          </div>
        </div>
      </div>
    </div>`;
};
