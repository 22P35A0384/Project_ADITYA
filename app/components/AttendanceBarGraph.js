import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AttendanceBarGraph = ({ present, total }) => {
  // Calculate the percentage of attendance
  const attendancePercentage = total === 0 ? 0 : (present / total) * 100;

  return (
    <View style={styles.container}>
      <View style={[styles.bar, { width: `${attendancePercentage}%` }]} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{`${attendancePercentage.toFixed(2)}%`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    // overflow: 'hidden',
  },
  bar: {
    height: 20,
    backgroundColor: 'green',
  },
  textContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default AttendanceBarGraph;
