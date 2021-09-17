import React, { useEffect, useState } from "react";
import CustomLoader from "../components/CustomLoader";
import axiosCall from "../api/axios";
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
    axiosCall(setLoading,setError,setTeamData,url)
  }, [url]);

  return (
    <>
      {Error ? (
        <h1>Something went wrong</h1>
      ) : Loading ? (
        <h1></h1>
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
