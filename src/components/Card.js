import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import CARD_STYLES from "../styles/CardStyle";

function Card(props) {
  const { img, data } = props;
  const history = useHistory();
  const teamStyle = CARD_STYLES();
  const clickHandler = useCallback(() => {
    history.push(`teams/${data.id}`);
  }, [data, history]);
  console.log(teamStyle.teamColour, data.id);
  return (
    <div
      className={`${teamStyle.teamCard} ${teamStyle[data.id]}`}
      onClick={clickHandler}
    >
      <img className={teamStyle.image} src={img} alt="team-logo" />
      <h2 className={teamStyle.teamName}>{data.teamName}</h2>
      <h4 className={teamStyle.venue}>{data.venue}</h4>
      {data.winningYears.length? (
        <div className={teamStyle.win}>
          <i className="fas fa-trophy">
          {data.winningYears.map((item) => {
              return `  ${item}  `;
            })}
          </i>
        </div>
      ) : (
        <></>
      )}
      <p className={teamStyle.teamHome}> Team Home</p>
      <i className={`fas fa-angle-right tab-arrow ${teamStyle.arrow}`}></i>
    </div>
  );
}

export default Card;
