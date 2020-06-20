import React from 'react'
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import styles from './styles'

// components
import Profile from '../../../components/Widgets/Profile'

const Application = () => {
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
      <View style={styles.projectContainer}>
        <View style={styles.profileContainer}>
          <Profile marginTop={0} />
        </View>
        <View style={styles.application}>
          <Text style={styles.timeline}>Posted 8 days ago</Text>
          <Text style={styles.applicationHeader}>Create an application</Text>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.applicationText}>
            I need a designer for my new website.{'\n'}
            The project is just at the beginning and I{'\n'}
            need wireframes before I start coding the{'\n'}
            website. I only want fireframes and I don't{'\n'}
            want prototype or UI design.{'\n'}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Application
