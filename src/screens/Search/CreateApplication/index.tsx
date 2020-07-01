import React from 'react'
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import styles from './styles'
import data from './constants'
import colors from '../../../utils/colors'
import { getHeight, fontFamily } from '../../../utils/styles'

// components
import Profile from '../../../components/Widgets/Profile'
import Tag from '../../../components/Widgets/Tag'

const Application = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search</Text>
      <View style={styles.searchBar}>
        <TextInput style={styles.searchInput} />
        <TouchableOpacity>
          <Image
            style={styles.searchIcon}
            source={require('../../../../assets/search-box-icon.png')}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.filterContainer}>
        <Image
          style={styles.filterIcon}
          source={require('../../../../assets/filter.png')}
        />
        <Text style={styles.filterText}>Filters</Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={({ item }: any) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Proposition')}
            style={styles.projectContainer}
          >
            <View style={styles.profileContainer}>
              <Profile marginTop={0} />
            </View>
            <View style={styles.application}>
              <Text style={styles.timeline}>Posted 8 days ago</Text>
              <Text style={styles.applicationHeader}>
                Create an application
              </Text>
              <Text style={styles.description}>Description</Text>
              <Text style={styles.applicationText}>{item.text}</Text>
              <View style={styles.priceContainer}>
                <Text
                  style={{
                    color: colors.ROYAL_PURPLE,
                    fontSize: getHeight(13),
                  }}
                >
                  16 propositions
                </Text>
                <Text
                  style={{
                    fontSize: getHeight(16),
                    color: colors.PURPLE,
                    fontFamily: fontFamily.FONT_FAMILY_BOLD,
                  }}
                >
                  $ 2400
                </Text>
              </View>
              <View style={styles.tagContainer}>
                <Tag text="UX/UI" />
                <Tag text="DESIGN" />
                <Tag text="FIGMA" />
                <Tag text="PHOTOSHOP" />
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item: any) => item.id}
      />
    </View>
  )
}

export default Application
