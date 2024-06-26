import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const AttendanceTable = ({ data }) => {
  // Get the current date
  const currentDate = new Date();

  // Filter the attendance data to include only the data for the present week
  const presentWeekData = data.filter(item => {
    const itemDate = new Date(item.date);
    return itemDate >= getStartOfWeek(currentDate) && itemDate <= getEndOfWeek(currentDate);
  });

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.date}</Text>
      <Text style={styles.cell}>{item.present}</Text>
      <Text style={styles.cell}>{item.total}</Text>
      <Text style={styles.cell}>{item.percentage}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={[styles.cell, styles.header]}>Date</Text>
        <Text style={[styles.cell, styles.header]}>Present</Text>
        <Text style={[styles.cell, styles.header]}>Total</Text>
        <Text style={[styles.cell, styles.header]}>Attendance Percentage</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  row: {
    width:"100%",
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cell: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
  },
  header: {
    fontWeight: 'bold',
    backgroundColor: '#f2f2f2',
  },
});

// Function to get the start of the week (Sunday)
const getStartOfWeek = date => {
  const startOfWeek = new Date(date);
  startOfWeek.setDate(date.getDate() - date.getDay());
  return startOfWeek;
};

// Function to get the end of the week (Saturday)
const getEndOfWeek = date => {
  const endOfWeek = new Date(date);
  endOfWeek.setDate(date.getDate() + (6 - date.getDay()));
  return endOfWeek;
};

export default AttendanceTable;
