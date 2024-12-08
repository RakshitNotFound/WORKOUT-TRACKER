import { StyleSheet, View, FlatList } from 'react-native';
import exercises from '../../assets/data/exercises.json';
import React from 'react';
import ExerciseListItem from '../../components/ExerciseListItem';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        contentContainerStyle={{
         // paddingTop: 70, // Moves the top padding into the scrollable area
          paddingBottom: 10, // Add some bottom padding for better spacing
        }}
        keyExtractor={(item, index)=> item.name + index}
        renderItem={({ item }) => <ExerciseListItem  item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
  },
});
