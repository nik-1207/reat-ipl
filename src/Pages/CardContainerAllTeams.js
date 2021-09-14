import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import logomap from "../config/logoMap";
import URL from "../config/urlMap";

function CardContainer(props) {
  const url = URL.default;
  const [TeamData, setTeamData] = useState("");
  useEffect(() => {
    async function getAllTeamData() {
      const res = await axios.get(url);
      setTeamData(res.data);
    }
    getAllTeamData();
  }, [url]);
  if (!TeamData) {
    return <h1>Loading...</h1>;
  } else {
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
  }
}

export default CardContainer;
