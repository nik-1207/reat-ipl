import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import TeamCardStyle from "../styles/TeamCardStyle";

function Card(props) {
  
  const { img, data } = props;
  const history = useHistory();
  const style = TeamCardStyle();

  const clickHandler = useCallback(() => {
    history.push(`teams/${data.id}`);
  }, [data, history]);

  return (
    <div
      className={`${style.teamCard} ${style[data.id]}`}
      onClick={clickHandler}
    >
      <img className={style.image} src={img} alt="team-logo" />
      <div className={style.tab}>
        <h2 className={style.teamName}>{data.teamName}</h2>
        <h4 className={style.venue}>{data.venue}</h4>
        {data.winningYears.length ? (
          <div className={style.win}>
            <i className="fas fa-trophy">
              {data.winningYears.map((item) => {
                return `  ${item}  `;
              })}
            </i>
          </div>
        ) : (
          <></>
        )}
      </div>
      <p className={style.teamHome}> Team Home</p>
      <i className={`fas fa-angle-right tab-arrow ${style.arrow}`}></i>
    </div>
  );
}

export default Card;
