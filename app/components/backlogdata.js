import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const AcademicDetailsTable = ({ data }) => {
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.semester}</Text>
      <Text style={styles.cell}>{item.numSubjects}</Text>
      <Text style={styles.cell}>{item.numBacklogs}</Text>
      <Text style={styles.cell}>{item.percentage}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={[styles.cell, styles.header]}>Semester</Text>
        <Text style={[styles.cell, styles.header]}>No of Subjects</Text>
        <Text style={[styles.cell, styles.header]}>No of Backlogs</Text>
        <Text style={[styles.cell, styles.header]}>Percentage</Text>
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
    flex: 1,
    padding: 10,
    // height:'100%',
    backgroundColor: '#fff',
  },
  row: {
    width: "100%",
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

export default AcademicDetailsTable;
