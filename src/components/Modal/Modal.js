import React from 'react'
import { Modal, Text, Pressable, View } from 'react-native'
import { Styles } from './Styles'

const CustomModal = ({
  isVisible,
  setIsVisible,
  mainMessage,
  btnMessage,
  customStyle,
}) => {
  return (
    <View style={Styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={isVisible}
        onRequestClose={() => {
          setIsVisible(!isVisible)
        }}
      >
        <View style={Styles.centeredView}>
          <View style={{ ...Styles.modalView, ...customStyle }}>
            <Text style={Styles.modalText}>{mainMessage}</Text>
            <Pressable
              style={[Styles.button, Styles.buttonClose]}
              onPress={() => setIsVisible(!isVisible)}
            >
              <Text style={Styles.textStyle}>{btnMessage}</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default CustomModal
