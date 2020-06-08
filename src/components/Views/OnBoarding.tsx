import React, { Fragment, useState } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import data from '../../screens/OnBoarding/constants'
import { getHeight, getWidth, fontFamily } from '../../utils/styles'
import colors from '../../utils/colors'

const OnBoarding = ({ navigation }: any) => {
  const [activeSlide, setActiveSlide] = useState(0)

  const renderItems = ({ item }: any) => {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={styles.header}>Spiice</Text>
        <Image source={item.image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{item.text}</Text>
        </View>
        <Pagination
          dotsLength={data.length}
          activeDotIndex={activeSlide}
          dotColor={colors.PURPLE}
          inactiveDotColor={colors.LIGHT_PURPLE}
          dotStyle={styles.paginationDot}
          inactiveDotStyle={styles.inactiveDot}
          inactiveDotOpacity={0.4}
        />
        {activeSlide === 4 && navigation.replace('SignUpScreen')}
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItems}
        sliderWidth={getWidth(375)}
        firstItem={activeSlide}
        itemWidth={getWidth(375)}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: getHeight(370),
    width: getWidth(370),
    resizeMode: 'contain',
    marginTop: getHeight(120),
  },
  header: {
    fontSize: getHeight(32),
    color: colors.BLACK,
    marginTop: getHeight(70),
  },
  textContainer: {
    width: getWidth(250),
  },
  text: {
    textAlign: 'center',
    fontSize: getHeight(18),
    color: colors.BLACK,
    fontFamily: fontFamily.FONT_FAMILY_MEDIUM,
  },
  paginationDot: {
    width: getWidth(10),
    height: getHeight(10),
    borderRadius: getWidth(5),
    marginHorizontal: -8,
  },
  inactiveDot: {
    width: getWidth(20),
    height: getHeight(20),
    borderRadius: getWidth(10),
  },
})

export default OnBoarding
