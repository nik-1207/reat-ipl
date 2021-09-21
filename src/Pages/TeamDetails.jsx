import React, { useEffect, useState } from "react";
import axiosCall from "../api/axios";
import Banner from "../components/Banner.jsx";
import Container from "../styles/PlayerContainerStyles";
import PlayerCard from "../components/PlayerCard.jsx";

function TeamDetails() {
  const teamName = window.location.pathname.slice(7);
  const style = Container();
  const [TeamData, setTeamData] = useState("");
  useEffect(() => {
      axiosCall(setTeamData, teamName);
  }, [teamName]);

  const { players } = TeamData;
  return (
    <>
      {TeamData && (
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
      )}
    </>
  );
}

export default TeamDetails;
