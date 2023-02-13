import React, { useState } from 'react';
import { StyleSheet, View, Text, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import {useKeepAwake} from "expo-keep-awake"

import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';
import { Timing } from '../components/Timing';

import { spacing } from '../utils/sizes';
import { colors } from '../utils/colors';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  2 * ONE_SECOND_IN_MS,
  3 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, setFocusSubject, onTimerEnd }) => {
  useKeepAwake()
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [minutes, setMinutes] = useState(1);

  const cancelSubject = () => {
    setFocusSubject(null);
  };

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject)
  };
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={(progress) => {
            setProgress(progress);
          }}
          onEnd={onEnd}
        />
        <View style={{ paddingTop: spacing.xxl }}>
          <Text style={styles.title}>Focusing on:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar
          progress={progress}
          color={colors.progressBar}
          style={{ height: spacing.sm }}
        />
      </View>

      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        <RoundedButton
          title={isStarted ? 'pause' : 'start'}
          onPress={() => setIsStarted((prev) => !prev)}
        />
      </View>

      <View style={styles.cancelButtonWrapper}>
        <RoundedButton title="-" size={50} onPress={cancelSubject} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timingWrapper: {
    flex: 0.1,
    paddingTop: spacing.xxl,
    flexDirection: 'row',
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.md,
  },

  cancelButtonWrapper: {
    flex: 0.1,
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  task: {
    color: colors.white,
    textAlign: 'center',
  },
});
