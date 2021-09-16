import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { LoadingEvent } from "../event/LoadingEvent";
import { subscribe } from "../pubsub/PubSub";

export default function CustomLoader() {
const [loading, setloading] = useState()

  useEffect(() => {
    const handle=subscribe(LoadingEvent,(args)=>
    {

      setloading(args.isLoading)
    })
    handle.unsubscribe();
  });

  return (
    <>{loading && <Loader
      style={{ margin: "25% 45%" }}
      type="TailSpin"
      color="#00BFFF"
      height={80}
      width={80}
    />}</>
  );
}
