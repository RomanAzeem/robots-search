import React from "react";

const Card = props => {
  const { id, name, email } = props;
  return (
    <div className="pa3 ma2 bg-light-green dib br3 grow">
      <img alt="robots" src={`https://robohash.org//${id}?size=200x200`} />
      <div className="tc">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default Card;
