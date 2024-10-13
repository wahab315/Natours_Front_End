import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllTours } from "../store/app/tours/action";
import Card from "../components/Card";

const Overview = () => {
  const dispatch = useDispatch();
  const { tours, isLoading, error } = useSelector(
    (state) => state.tourManagement
  );
  useEffect(() => {
    dispatch(fetchAllTours());
  }, [dispatch]);

  return (
    <main className="main">
      <div className="card-container">
        {tours?.tours?.map((el) => (
          <Card key={el._id} id={el._id} name={el.name} price={el.price} />
        ))}
      </div>
    </main>
  );
};

export default Overview;
