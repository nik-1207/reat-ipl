import axios from "axios";
import{ LoadingEvent }from "../event/LoadingEvent"
import {publish} from "../pubsub/PubSub"
export default async function getAllTeamData(
  callBackLoading,
  callBackError,
  callBackData,
  url
) {
  publish(new LoadingEvent({ isLoading: true }));
  await axios
    .get(url)
    .then((res) => {
      callBackData(res.data);
      callBackLoading(false);
    })
    .catch(() => {
      callBackError(true);
      callBackLoading(false);
    });
}

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    publish(new LoadingEvent({ isLoading: false}));
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
