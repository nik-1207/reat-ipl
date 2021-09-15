import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import logomap from "../config/logoMap";
import CONTAINER_STYLE from "../styles/ContainerStyle";
import URL from "../config/urlMap";

function CardContainer(props) {
  const url = URL.default;
  const [Loading, setLoading] = useState(true);
  const [TeamData, setTeamData] = useState("");
  const [Error, setError] = useState(false);
  const ContainerStyle = CONTAINER_STYLE();
  useEffect(() => {
    async function getAllTeamData() {
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
    getAllTeamData();
  }, [url]);

  return (
    <div>
      {Error ? (
        <h1>Something went wrong</h1>
      ) : Loading ? (
        <h1>Loading</h1>
      ) : (
        <div className={ContainerStyle.cardcontainer}>
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
      )}
    </div>
  );
}

export default CardContainer;
