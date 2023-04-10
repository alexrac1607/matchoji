import React from 'react'
import {Alert, Modal, Stylesheet, Text, Pressable, View} from 'react-native';
import { Styles } from './Styles';

const CustomModal = ({isVisible, setIsVisible}) => {
    return (
        <View style={Styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={isVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setIsVisible(!isVisible);
        }}>
        <View style={Styles.centeredView}>
          <View style={Styles.modalView}>
            <Text style={Styles.modalText}>Hello World!</Text>
            <Pressable
              style={[Styles.button, Styles.buttonClose]}
              onPress={() => setIsVisible(!isVisible)}>
              <Text style={Styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
    )
}
  
  
  export default CustomModal