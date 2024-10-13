import { useSelector, useDispatch } from "react-redux";
import { fetchSingleTour } from "../store/app/tours/action";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const TourDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const { singleTour, isLoading, error } = useSelector(
    (state) => state.tourManagement
  );

  useEffect(() => {
    dispatch(fetchSingleTour(params.id));
  }, [dispatch, params.id]);

  return (
    <>
      <section className="section-header">
        <div className="heading-box">
          <h1 className="heading-primary">
            <span>{singleTour?.data?.name}</span>
          </h1>
          <div className="heading-box__group">
            <div className="heading-box__detail">
              <svg className="heading-box__icon">
                <use xlinkHref="img/icons.svg#icon-clock"></use>
              </svg>
              <span className="heading-box__text">10 days</span>
            </div>
            <div className="heading-box__detail">
              <svg className="heading-box__icon">
                <use xlinkHref="img/icons.svg#icon-map-pin"></use>
              </svg>
              <span className="heading-box__text">Las Vegas, USA</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TourDetail;
