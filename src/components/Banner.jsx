import React from "react";
import BannerStyle from "../styles/BannerStyle";

function Banner(props) {
  const { teamName } = props;
  const style = BannerStyle();
  return (
    <div className={style[`${teamName}-banner`]}>
      <div className={style[`${teamName}-overlay`]}>
        <div className={style[`${teamName}-overlay-img`]}>
        </div>
      </div>
    </div>
  );
}

export default Banner;
