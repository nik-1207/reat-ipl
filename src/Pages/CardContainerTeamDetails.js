import axios from "axios";
import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import PlayerCard from "../components/PlayerCard";
import TEAM_CONTAINER from "../styles/TeamContainerStyles";

function CardContainerTeamDetails(props) {
  const { url, teamName } = props;
  const style = TEAM_CONTAINER();
  const [TeamData, setTeamData] = useState("");
  useEffect(() => {
    async function getAllTeamData() {
      const res = await axios.get(url);
      setTeamData(res.data);
    }
    getAllTeamData();
  }, [url]);
  if (!TeamData) {
    return <h1>Loading....</h1>;
  } else {
    const { players } = TeamData;
    return (
      <>
        <Banner teamName={teamName} />
        <div className={style.teamContainer}>
          {players.map((item) => {
            return (
              <PlayerCard
                teamName={teamName}
                key={item.id}
                img={item.image}
                name={item.name}
                matches={item.stats.matches}
                runs={item.stats.runs}
                wickets={item.stats.wickets}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default CardContainerTeamDetails;
