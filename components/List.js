import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useState } from 'react'
import FriendItem from './FriendItem'

const List = ({friendList, goToViewFriend, selectedFriend, setSelectedFriend}) => {
  return (
    <View>
      <ScrollView>
        {/* <Text>Hi</Text> */}      
        {friendList.map((friend) => {
            return<FriendItem friendObj={friend} 
                              goToViewFriend={goToViewFriend}
                              selectedFriend={selectedFriend}
                              setSelectedFriend={setSelectedFriend}/>
        })}
      </ScrollView>
    </View>
  )
}

export default List