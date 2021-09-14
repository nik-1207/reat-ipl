import { createUseStyles } from "react-jss";

const CONTAINER_STYLE = createUseStyles({
  cardcontainer: {
    display: "flex",
    flexWrap: "wrap",
    padding: "36px",
    justifyContent: "space-around",
  },
  "@media screen and (max-width: 700px)": {
     cardcontainer:{
         flexDirection:"column",
         padding:"10px",

     }
  },
});
export default CONTAINER_STYLE;
