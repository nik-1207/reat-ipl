import React, { useEffect, useState } from "react";
import axiosCall from "../api/axios";
import URL from "../config/UrlMap";
import LogoMap from "../config/LogoMap";
import Card from "../components/TeamCard.jsx";
import ContainerStyle from "../styles/TeamContainerStyle";

function CardContainer() {

  const url = URL.default;
  const [TeamData, setTeamData] = useState("");
  const style = ContainerStyle();

  useEffect(() => {
    axiosCall(setTeamData,url)
  }, [url]);

  return (
    <>
      {TeamData &&( <div className={style.cardcontainer}>
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
