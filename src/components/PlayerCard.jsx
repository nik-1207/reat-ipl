import React from "react";
import PlayerCardStyle from "../styles/PlayerCardStyle";

function PlayerCard(props) {
const style=PlayerCardStyle()
  const { img, name, matches, runs, wickets,teamName } = props;
  return (
    <div className={style.playerCard}>
      <div className={style[teamName]}>
      <img src={img} alt={name} className={style[teamName]}/>
      </div>
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
