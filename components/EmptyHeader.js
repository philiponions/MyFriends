import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const EmptyHeader = () => {
  return (
    <View style={styles.container}>
      <Text>You have no friends. Consider making some?</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },    
})

export default EmptyHeader