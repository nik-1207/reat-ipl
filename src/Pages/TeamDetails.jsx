import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import Loader from "react-loader-spinner";
import URL from "../config/UrlMap";
import Banner from "../components/Banner.jsx";
import Container from "../styles/PlayerContainerStyles";
import NotFound from "../components/NotFound.jsx";
import PlayerCard from "../components/PlayerCard.jsx";

function TeamDetails() {
  const teamName = window.location.pathname.slice(7);
  const url = URL[teamName];
  const style = Container();
  const [TeamData, setTeamData] = useState("");
  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState(false);
  const [wrongPath, setwrongPath] = useState(false);
  useEffect(() => {
    if (!url) {
      setwrongPath(true);
    } else {
      setwrongPath(false);
      axios(setLoading, setError, setTeamData, url);

    }
  }, [url]);

  const { players } = TeamData;
  return (
    <>
      {wrongPath ? (
        <NotFound />
      ) : Error ? (
        <h1>Soething went wrong</h1>
      ) : Loading ? (
        <h1></h1>
      ) : (
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
