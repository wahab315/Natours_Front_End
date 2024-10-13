const Card = ({ name, price }) => {
  return (
    <div className="card">
      <div className="card__header">
        <div className="card__picture">
          <div className="card__picture-overlay">&nbsp;</div>
          <img
            src="img/tour-2-cover.jpg"
            alt="Tour 1"
            className="card__picture-img"
          />
        </div>

        <h3 className="heading-tertirary">
          <span>{name}</span>
        </h3>
      </div>

      <div className="card__details">
        <h4 className="card__sub-heading">Medium-difficult 7-day tour</h4>
        <p className="card__text">
          Exploring the jaw-dropping US east coast by foot and by boat
        </p>
        <div className="card__data">
          <svg className="card__icon">
            <use xlinkHref="img/icons.svg#icon-map-pin"></use>
          </svg>
          <span>Oregon, US</span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <use xlinkHref="img/icons.svg#icon-calendar"></use>
          </svg>
          <span>June 2021</span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <use xlinkHref="img/icons.svg#icon-flag"></use>
          </svg>
          <span>4 stops</span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <use xlinkHref="img/icons.svg#icon-user"></use>
          </svg>
          <span>15 people</span>
        </div>
      </div>

      <div className="card__footer">
        <p>
          <span className="card__footer-value">${price}</span>
          <span className="card__footer-text">per person</span>
        </p>
        <p className="card__ratings">
          <span className="card__footer-value">4.8</span>
          <span className="card__footer-text">rating (12)</span>
        </p>
        <a href="#" className="btn btn--green btn--small">
          Details
        </a>
      </div>
    </div>
  );
};

export default Card;
