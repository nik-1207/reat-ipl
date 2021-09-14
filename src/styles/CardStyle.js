import { createUseStyles } from "react-jss";

const CARD_STYLES = createUseStyles({
  teamCard: {
    margin: "1%",
    width: "7.4cm",
    marginTop: "2cm",
    color: "white",
    borderRadius: "1rem",
    boxShadow: "4px 4px 9px 0px #a2a2a2",
    textAlign: "center",
  },
  image: {
    marginTop: "-19px",
  },
  arrow: {
    display: "none",
  },
  win:{
      display:"initial"
  },
  teamHome:{
  },
  teamName: {
    margin: "50px",
  },
  venue: {
    margin: "30px",
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
  "@media screen and (max-width: 700px)": {
    teamCard: {
      display: "flex",
      width:"98%",
    },
    teamName: {
      margin: "0px",
    },
    venue: {
      display: "none",
    },
    win: {
      display: "none",
    },
    teamHome:{
        display:"none",
    }
  },
});
export default CARD_STYLES;
