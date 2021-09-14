import axios from "axios";
import React, { useEffect, useState } from "react";
import PlayerCard from "../components/PlayerCard";

function CardContainerTeamDetails(props) {
  const { url } = props;
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
    const {players}=TeamData
    return(
      <div>
        {
          players.map((item)=>
            {
              return(
                <PlayerCard
                  key={item.id}
                  img={item.image}
                  name={item.name}
                  matches={item.stats.matches}
                  runs={item.stats.run}
                  wickets={item.stats.wickets}
                />
              )
            })
        }
      </div>
    )
  }
}

export default CardContainerTeamDetails;
