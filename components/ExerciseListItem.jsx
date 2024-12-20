import { StyleSheet, View, Text } from 'react-native';
import React from 'react';

export default function ExerciseListItem({ item }) {
    return (
      <View style={styles.exerciseContainer}>
        <Text style={styles.exerciseName}>{item.name}</Text>
        <Text style={styles.exerciseSubtitle}>
         <Text style={styles.subValue}>{item.muscle}</Text>  | {' '}
         <Text styles={styles.subValue}>{item.equipment}</Text> 
        </Text>
      </View>
    );
  }


  
const styles = StyleSheet.create({
    
    exerciseName: {
      fontSize: 20,
      fontWeight: '500',
    },
    exerciseSubtitle: {
      color: 'dimgray',
    },
    exerciseContainer: {
      padding: 10,
      backgroundColor: '#fff',
      borderRadius: 10,
      gap: 5,
      marginBottom: 10, // Added spacing between items
    },
    subValue: {
      textTransform: 'capitalize'
    }
  });