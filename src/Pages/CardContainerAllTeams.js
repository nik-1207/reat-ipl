import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import axios from "axios";
import Card from "../components/TeamCard.jsx";
import logomap from "../config/LogoMap";
import CONTAINER_STYLE from "../styles/ContainerStyle";
import URL from "../config/UrlMap";

function CardContainer() {
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
        <Loader style={{ margin:"25% 45%"}} type="TailSpin" color="#00BFFF" height={80} width={80} />
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
