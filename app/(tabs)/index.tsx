import { StyleSheet, View, Text } from 'react-native';
import exercises from '../../assets/data/exercises.json';


export default function HomeScreen() {
  const exercise = exercises[0];
  return (
    <View style={styles.container}>
      <View style={styles.exerciseContainer}>
        <Text style={styles.exerciseName}>{exercise.name}</Text>
        <Text style={styles.exerciseSubtitle}>
          {exercise.muscle.toUpperCase()} | {exercise.equipment.toUpperCase()}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    justifyContent: 'center',
    padding: 10,
  },
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
    gap:5,
  },
});
