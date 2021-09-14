import React from "react";

function PlayerCard(props) {
  const { img, name, matches, runs, wickets } = props;
  return (
    <div>
      <img src={img} alt={name} />
      <div>
        <p>{name}</p>
        <ul>
          <li>
            <span >{matches}</span>
            <span >Matches</span>
          </li>
          <li>
            <span >{runs}</span>
            <span >Runs</span>
          </li>
          <li>
            <span >{wickets}</span>
            <span >Wickets</span>
          </li>
        </ul>
        <button>View Profile</button>
      </div>
    </div>
  );
}

export default PlayerCard;
