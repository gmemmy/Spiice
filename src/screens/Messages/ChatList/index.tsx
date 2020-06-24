import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import styles from './styles'
import chatList from './constants'
import { checkOddEvenNumber, stringBreak } from '../../../utils/helpers'
import colors from '../../../utils/colors'

const ChatList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Messages</Text>
      <FlatList
        data={chatList}
        contentContainerStyle={styles.chatListContainer}
        renderItem={({ item }: any) => (
          <TouchableOpacity
            style={[
              styles.chat,
              {
                backgroundColor: checkOddEvenNumber(item.id)
                  ? colors.BABY_PURPLE
                  : colors.WHITE,
              },
            ]}
          >
            <Image style={styles.profilePhoto} source={item.profilePhoto} />
            <View style={styles.nameAndMessageContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.message}>
                {stringBreak(item.lastMessage)}
              </Text>
            </View>
            <Image
              style={styles.next}
              source={require('../../../../assets/next.png')}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item: any) => item.id}
      />
    </View>
  )
}

export default ChatList
