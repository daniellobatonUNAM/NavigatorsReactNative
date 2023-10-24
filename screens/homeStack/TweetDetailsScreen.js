import { View, Text, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';

const TweetDetailsScreen = () => {

  const navigation = useNavigation();

  const {params: {siu},} = useRoute();

  console.log(siu);

  useLayoutEffect(() => {

    navigation.setOptions({

      headerTitle: 'Cristiano Ronaldo'

    })

  }, []);

  return (

    <View testID='TweetDetailsScreen' style={styles.container}>

      <Text>Tweet Details</Text>

    </View>

  );

}

const styles = StyleSheet.create({
  container: {

  }
})

export default TweetDetailsScreen