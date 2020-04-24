import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.colDiv}>
        <View style={styles.rowDiv}>
          <View style={[styles.box, { backgroundColor: 'red' }]} />
          <View style={[styles.box, { backgroundColor: 'blue' }]} />
        </View>
        <View style={styles.rowDiv}>
          <View style={[styles.box, { backgroundColor: 'yellow' }]} />
          <View style={[styles.box, { backgroundColor: 'green' }]} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100%',
    minWidth: '100%'
  },
  rowDiv: {
    flexDirection: 'row',
    margin: 0,
    minHeight: '50%'
  },
  colDiv: {
    flexDirection: 'column',
    margin: 0,
    minHeight: '100%',
    minWidth: '100%'
  },
  box: {
    backgroundColor: "red",
    borderWidth: 2,
    padding: 25,
    margin: 5,
    minWidth: '50%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
