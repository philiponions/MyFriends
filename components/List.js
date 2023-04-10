import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useState } from 'react'
import FriendItem from './FriendItem'

const List = () => {
    // const [friendList, setFriendList] = useState(["john", "jimmy", "carol", "kate"])
    const friendList = ["john", "jimmy", "carol", "kate"]

  return (
    <View>
      <ScrollView>
        {/* <Text>Hi</Text> */}      
        {friendList.map((friend) => {
            return<FriendItem friendName={friend}/>
        })}
      </ScrollView>
    </View>
  )
}

export default List