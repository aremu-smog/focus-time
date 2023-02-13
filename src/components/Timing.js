import React from 'react'
import {View, StyleSheet} from 'react-native'

import {RoundedButton} from './RoundedButton'

export const Timing = ({onChangeTime}) => {

return <>
<View style={styles.timingButton}>
<RoundedButton title="10" onPress={()=> onChangeTime(10)} size={75} />
</View>
<View style={styles.timingButton}>
<RoundedButton title="15" onPress={()=> onChangeTime(15)} size={75} />
</View>
<View style={styles.timingButton}>
<RoundedButton title="20" onPress={()=> onChangeTime(20)} size={75} />
</View>
</>

}

const styles = StyleSheet.create({
  timingButton : {
    flex: 1,
    alignItems: 'center'
  }
})