import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import logomap from "../config/logoMap";
import "../components/temp.css";

function CardContainer(props) {
  const { url } = props;
  const [TeamData, setTeamData] = useState("");
  const { players } = TeamData;
  useEffect(() => {
    async function getAllTeamData() {
      const res = await axios.get(url);
      setTeamData(res.data);
    }
    getAllTeamData();
  }, [url]);
  if (!players) {
    return (
      <div className="card-container">
        {Object.keys(logomap).map((key, index) => {
          return (
            <Card
              img={logomap[key].default}
              key={index}
              data={TeamData[index]}
            />
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="card-container">
        {players.map((item, index) => {
          return (
            <div key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <p>{item.name}</p>
                <ul>
                  <li>
                    <span>{item.stats.matches}</span>
                    <span>Matches</span>
                  </li>
                  <li>
                    <span>{item.stats.runs}</span>
                    <span>Runs</span>
                  </li>
                  <li>
                    <span>{item.stats.wickets}</span>
                    <span>Wickets</span>
                  </li>
                </ul>
                <button>View Profile</button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardContainer;
