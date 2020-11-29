import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {formatTimer} from '../../assets/helperFunction';

const Timer = (props) => {
  let interval;
  const {maxSeconds, descending} = props;
  const [seconds, setSeconds] = useState(descending ? maxSeconds : 0);

  useEffect(() => {
    interval = setInterval(() => {
      setSeconds((prevSeconds) =>
        descending ? prevSeconds - 1 : prevSeconds + 1,
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  useEffect(() => {
    const stopTimer = descending ? 0 : maxSeconds;
    if (seconds === stopTimer) {
      clearInterval(interval);
    }

    return () => {
      return;
    };
  }, [seconds]);

  return (
    <View>
      <Text>{formatTimer(seconds)}</Text>
    </View>
  );
};

export default Timer;
