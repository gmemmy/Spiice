import React from 'react'
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import styles from './styles'

// components
import Profile from '../../../components/Widgets/Profile'
import Tag from '../../../components/Widgets/Tag'

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
      <ScrollView>
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
            <View style={styles.tagContainer}>
              <Tag text="UX/UI" />
              <Tag text="DESIGN" />
              <Tag text="FIGMA" />
              <Tag text="PHOTOSHOP" />
            </View>
          </View>
        </View>
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
      </ScrollView>
    </View>
  )
}

export default Application
