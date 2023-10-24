import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Tweet = () => {

    const {navigate} = useNavigation();

  return (

    <View>

      <Text>SIU</Text>

      <Button onPress={() => {
        navigate('TweetDetailsScreen', {'siu': 'siu'})
        
      }} title='Press'/>

    </View>

  )

}

export default Tweet