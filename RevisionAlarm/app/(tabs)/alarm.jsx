import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'


const Alarm = () => {
  return (
    <View>
      <Text>Alarm</Text>
      <Image source={icons.alarmIcon} className="w-38 h-38"/>
    </View>
  )
}

export default Alarm