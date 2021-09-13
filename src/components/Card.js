import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import "./temp.css";

function Card(props) {
  const { img, data } = props;
  const history = useHistory();
  const clickHandler = useCallback(() => {
    history.push(`teams/${data.id}`);
  }, [data, history]);
  if (!data) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="card" onClick={clickHandler}>
        <img src={img} alt="team-logo" />
        <div>
          <h2>{data.teamName}</h2>
          <h4>{data.venue}</h4>
          <div>
            <i className="fas fa-trophy"></i>
            <span>{data.winningYears}</span>
          </div>
        </div>
        Team Home
        <i className="fas fa-angle-right tab-arrow"></i>
      </div>
    );
  }
}

export default Card;
