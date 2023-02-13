import React, { useState } from 'react';
import {
  Text,
  View,
  Platform,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Constants from 'expo-constants';

import { colors } from './src/utils/colors';

import { Focus } from './src/features/Focus';
import {Timer} from "./src/features/Timer"
import {FocusHistory} from './src/features/FocusHistory'

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([])
  return (
    <SafeAreaView style={styles.container}>
      {currentSubject ? (
      <Timer focusSubject={currentSubject} setFocusSubject={setCurrentSubject} onTimerEnd={(subject)=>{
        setHistory([...history, subject])
      }} />
      ) : (
        <>
        <Focus addSubject={setCurrentSubject} />
        <FocusHistory history={history} />
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    align: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
});
