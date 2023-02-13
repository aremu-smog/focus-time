import React, { useState } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

import { RoundedButton } from '../components/RoundedButton';

import { colors } from '../utils/colors';
import {spacing} from '../utils/sizes'

export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState('');

  console.log(subject);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          label="What would you like to focus on?"
          onChangeText={setSubject}
          style={styles.input}
        />

        <View style={styles.buttonContainer}>
          <RoundedButton onPress={()=>addSubject(subject)} style={styles.button} title="+" size={50} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  
  },
  inputContainer: {
    padding: spacing.lg,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    marginRight: spacing.sm,
  },

  buttonContainer: {
    justifyContent: 'center',
  },


});
