import { View, Text } from 'react-native'
import React from 'react'
import Tweet from '../homeStack/Tweet'

const Feed = () => {
  return (
    <View>
      <Text>Feed</Text>
      <Tweet/>
      <Tweet/>
      <Tweet/>
      <Tweet/>
    </View>
  )
}

export default Feed