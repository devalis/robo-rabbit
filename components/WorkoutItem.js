import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors'


const WorkoutItem = props => {
  return (
    <View style={styles.WorkoutItem}>
      <TouchableOpacity onPress={props.onSelectWorkout}>
        <MaterialCommunityIcons 
          style={styles.dots} 
          name='dots-vertical' 
          size={24} 
          color={Colors.primaryColor} 
        />  
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description}</Text>
        <Text style={styles.date}>{props.date}</Text>      
      </TouchableOpacity>     
    </View>
  );
};

const styles = StyleSheet.create({
  WorkoutItem: {
    height: 180,
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10
  },
  dots: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    position: 'absolute',
    top: 0,
    right: 0
  },
  title: {
    fontFamily: 'montserrat-bold',
    fontSize: 20,
    color: Colors.primaryColor,
    paddingVertical: 25,
    paddingHorizontal: 15
  },
  description: {
    height: '30%',
    paddingHorizontal: 15,
    justifyContent: 'space-between'
  },
  date: {
    paddingVertical: 15,
    paddingHorizontal: 15
  }
});

export default WorkoutItem;
