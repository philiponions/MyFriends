import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react'
import FriendItem from './FriendItem'

const List = ({friendList, goToViewFriend, selectedFriend, setSelectedFriend}) => {
  return (
        <ScrollView style={{backgroundColor: "#a8a8a8", marginBottom: 50}} contentContainerStyle={{ flexGrow: 1 }}>
          {friendList.map((friend) => {
              return<FriendItem friendObj={friend} 
                                goToViewFriend={goToViewFriend}
                                selectedFriend={selectedFriend}
                                setSelectedFriend={setSelectedFriend}/>
          })}
        </ScrollView>
      
    
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,

    // flexGrow: 1
  }
})

export default List