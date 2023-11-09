import React, { useEffect, useState } from "react";
import { TimeFormat } from "../../../util/time-format";
import { Text, View } from "react-native";

const Timer = ({ callQueuedTime }) => {
  const [time, setTime] = useState(() => new Date().getTime());
  useEffect(() => {
    const queuedTime = new Date(callQueuedTime).getTime();
    const intervalId = setInterval(function () {
      setTime(new Date().getTime() - queuedTime);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [callQueuedTime]);

  return <TimeFormat time={time} />

};

export default Timer;
