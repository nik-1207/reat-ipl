import axios from "axios";
import Loader from "react-loader-spinner";
import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import PlayerCard from "../components/PlayerCard.jsx";
import URL from "../config/UrlMap";
import TEAM_CONTAINER from "../styles/TeamContainerStyles";
import NotFound from "../components/NotFound.jsx";

function CardContainerTeamDetails() {
  const teamName = window.location.pathname.slice(7);
  const url = URL[teamName];
  const style = TEAM_CONTAINER();
  const [TeamData, setTeamData] = useState("");
  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState(false);
  const [wrongPath, setwrongPath] = useState(false);
  useEffect(() => {
    async function getAllTeamData() {
      if (!url) {
        setwrongPath(true);
      } else {
        setwrongPath(false);
        await axios
          .get(url)
          .then((res) => {
            setTeamData(res.data);
            setLoading(false);
          })
          .catch(() => {
            setError(true);
            setLoading(false);
          });
      }
    }
    getAllTeamData();
  }, [url]);
  const { players } = TeamData;
  return (
    <div>
      {wrongPath ? (
        <NotFound />
      ) : Error ? (
        <h1>Soething went wrong</h1>
      ) : Loading ? (
        <Loader
          style={{ margin: "25% 45%" }}
          type="TailSpin"
          color="#00BFFF"
          height={80}
          width={80}
        />
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
    </div>
  );
}

export default CardContainerTeamDetails;
