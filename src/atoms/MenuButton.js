<<<<<<< HEAD
import React, { useEffect } from 'react'
import { Button, Image, ImageBackground, Pressable, Text } from 'react-native'
import styles from './MenuButtonStyles.js'
import button from '../assets/orangeButton.png'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  Easing,
} from 'react-native-reanimated'
=======
import React from 'react'
import { Button, Image, ImageBackground, Pressable, Text } from 'react-native'
import styles from './styles.js'
import button from '../assets/orangeButton.png'
>>>>>>> 7629631772b8a4726cb3283a6a51d0a5ff675cb3
const MenuButton = ({ btnLabel, mainAction }) => {
  const scaleX = useSharedValue(1)
  const scaleY = useSharedValue(1.1)
  useEffect(() => {
    const timingOptions = {
      duration: 900,
    }
    scaleX.value = withRepeat(withTiming(1.05, timingOptions), -1, true)
    scaleY.value = withRepeat(withTiming(1, timingOptions), -1, true)
  }, [])

  const wobblingAnimation = useAnimatedStyle(() => {
    return { transform: [{ scaleX: scaleX.value }, { scaleY: scaleY.value }] }
  })

  return (
    <>
      <Animated.View style={[wobblingAnimation]}>
        <Pressable
          style={[styles.wrapper]}
          onPress={() => {
            mainAction()
          }}
        >
          <Image style={styles.image} source={button}></Image>
          <Text style={styles.text}>{btnLabel}</Text>
        </Pressable>
      </Animated.View>
    </>
  )
  return (
    <Pressable
      style={styles.wrapper}
      onPress={() => {
        mainAction()
      }}
    >
      <Image style={styles.image} source={button}></Image>
      <Text style={styles.text}>{btnLabel}</Text>
    </Pressable>
  )
  return (
    <Button
      onPress={() => {
        mainAction()
      }}
      title={btnLabel}
    ></Button>
  )
}

export default MenuButton
