import React from "react";
import BANNER_STYLES from "../styles/BANNER_STYLE";

function Banner(props) {
  const { teamName } = props;
  const style = BANNER_STYLES();
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
