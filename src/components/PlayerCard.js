import React from "react";
import PLAYER_CARD from "../styles/TeamCardStyle";

function PlayerCard(props) {
const style=PLAYER_CARD()
  const { img, name, matches, runs, wickets,teamName } = props;
  return (
    <div className={style.playerCard}>
      <img src={img} alt={name} className={style[teamName]}/>
      <div className={style.playerDetail}>
        <p className={style.name}>{name}</p>
        <ul className={style.stats}>
          <li className={style.listItem}>
            <span className={style.value}>{matches}</span><br/>
            <span className={style.label}>Matches</span>
          </li>
          <li className={style.listItem}>
            <span className={style.value}>{runs}</span><br/>
            <span className={style.label}>Runs</span>
          </li>
          <li className={style.listItem}>
            <span className={style.value}>{wickets}</span><br/>
            <span className={style.label}>Wickets</span>
          </li>
        </ul>
        <button className={style.button}>View Profile</button>
      </div>
    </div>
  );
}

export default PlayerCard;
