import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import axios from "axios";
import URL from "../config/UrlMap";
import LogoMap from "../config/LogoMap";
import Card from "../components/TeamCard.jsx";
import ContainerStyle from "../styles/TeamContainerStyle";

function CardContainer() {

  const url = URL.default;
  const [Loading, setLoading] = useState(true);
  const [TeamData, setTeamData] = useState("");
  const [Error, setError] = useState(false);
  const style = ContainerStyle();

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
    <>
      {Error ? (
        <h1>Something went wrong</h1>
      ) : Loading ? (
        <Loader style={{ margin:"25% 45%"}} type="TailSpin" color="#00BFFF" height={80} width={80} />
        ) : (
        <div className={style.cardcontainer}>
          {Object.keys(LogoMap).map((key, index) => {
            return (
              <Card
                img={LogoMap[key].default}
                key={index}
                data={TeamData[index]}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default CardContainer;
