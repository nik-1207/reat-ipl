import { createUseStyles } from "react-jss";

const CARD_STYLES = createUseStyles({
  teamCard: {
    width: "auto",
    margin: "auto",
    textAlign: "center",
    marginTop: "70px",
    marginBottom: "0px",
    borderRadius: "1rem",
    boxShadow: " 4px 4px 9px 0px #a2a2a2",
    "&:hover": {
      cursor:"pointer"
    },
  },
  image: {
    marginTop: " -10px",
    width: "50%",
    position: "relative",
  },
  arrow: {
    display: "none",
  },
  win: {
    background: " rgba(0, 0, 0, 0.2)",
    color: "#e2d612",
    margin: " 5px 50px 5px 50px",
    padding: " 5px",
    textAlign: "center",
    borderRadius: "1cm",
  },
  teamHome: {
    fontWeight: "850",
    fontSize: "1em",
    lineHeight: "3em",
    color: "white",
  },
  teamName: {
    paddingTop: "2px",
    paddingBottom: "2px",
    paddingLeft: "20px",
    paddingRight: "20px",
    margin: "2px 30px 2px 30px",
    textAlign: "center",
    width: "200px",
    color: "white",
    textDecoration: "none",
  },
  venue: {
    padding: "10px",
    margin: "auto",
    color: "white",
    textDecoration: "none",
  },
  tab: {},
  "@media screen and (max-width: 640px)": {
    teamCard: {
      display: " flex",
      margin: "10px 1px 10px 1px",
      borderRadius: "5px",
      width: "100%",
    },
    image: {
      marginTop: "1px",
      padding: "5px",
      width: "2.5cm",
    },
    tab: {
      display: "flex",
      padding: "0",
      margin: "0",
      width: "100%",
      flexDirection: " column",
      alignItems: "flex-start",
    },
    arrow: {
      display: " initial ",
      fontSize: " 2em",
      color: "white",
      padding: "45px 12px 40px 5px",
      backgroundColor: "#1f1f1f52",
      borderRadius: " 0px 5px 5px 0px",
      float: "right",
    },
    win: {
      background: "rgba(0, 0, 0, 0.2)",
      color: "#e2d612",
      margin: "0",
      borderRadius: "1cm",
      width: " auto",
    },
    teamHome: {
      display: "none",
    },
    teamName: {
      height: "max-content",
      textAlign: " left",
      fontSize: " 1em",
      margin: "15px 0px 5px ",
      padding: "5px ",
      width: "fit-content",
    },
    venue: {
      display: "none",
    },
  },
  "chennai-super-kings": {
    background: "linear-gradient(136deg, rgb(253, 185, 19), rgb(248, 92, 0))",
  },
  "delhi-capitals": {
    background: "linear-gradient(136deg, #004c93, #0358a7)",
  },
  "kings-xi-punjab": {
    background: " linear-gradient(136deg, #aa4545, #740f0b)",
  },
  "kolkata-knight-riders": {
    background: "linear-gradient(136deg, #70458f, #3d2057)",
  },
  "mumbai-indians": {
    background: "linear-gradient(136deg, #005da0, #003a63)",
  },
  "rajasthan-royals": {
    background: " linear-gradient(136deg, #2d4d9d, #172e5e)",
  },
  "royal-challengers-bangalore": {
    background: " linear-gradient(136deg, #000, #464646)",
  },
  "sunrisers-hyderabad": {
    background: "linear-gradient(136deg, #fb643e, #b81c25)",
  },
});
export default CARD_STYLES;
