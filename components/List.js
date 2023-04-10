import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useState } from 'react'
import FriendItem from './FriendItem'

const List = ({friendList}) => {
    // const [friendList, setFriendList] = useState(["john", "jimmy", "carol", "kate"])
    

  return (
    <View>
      <ScrollView>
        {/* <Text>Hi</Text> */}      
        {friendList.map((friend) => {
            return<FriendItem friendName={friend.name}/>
        })}
      </ScrollView>
    </View>
  )
}

export default List