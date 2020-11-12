import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
 
import Colors from '../constants/Colors'

const SetHeaders = props => {
    const setHeaders = ['Sets', 'Reps', 'Meters', 'Pace']

    return (
        <View style={styles.setHeaders}>
            {setHeaders.map((header, index) => (
                <Text 
                    key={index} 
                    style={styles.labelHeader}
                >{header}
                </Text>
            ))}

            <Ionicons
                name='ios-add-circle' 
                size={26} 
                color={Colors.primaryColor} 
                onPress={props.addSet}
            />
        </View>
  )
}

const styles = StyleSheet.create({
    setHeaders: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5
    },
    labelHeader: {
        color: Colors.primaryColor
    }
})

export default SetHeaders
