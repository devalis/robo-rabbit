import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'


const StartModal = props => {
  const { modalVisible, setModalVisible } = props

  return (
    <Modal
    animationType='fade'
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => setModalVisible(false)}
    >
    <View style={styles.centeredView}>
        <View style={styles.modalView}>
        <TouchableOpacity
            onPress={() => setModalVisible(false)}
            >
            <MaterialCommunityIcons  
            name='clock-check-outline' 
            size={160} 
            color={'green'}
            /> 
            <Text style={styles.modalText}>Session started</Text>
        </TouchableOpacity>
        </View>
    </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  modalText: {
    marginTop: 15,
    textAlign: 'center'
  }
})

export default StartModal
