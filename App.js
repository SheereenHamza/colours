import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
      <View style={styles.rowDiv}>
        <View styles={styles.colDiv}>
          <View style={{ backgroundColor: 'red' }}>
          </View>
          <View style={{ backgroundColor: 'blue' }}>
          </View>
        </View>
        <View styles={styles.colDiv}>
          <View style={{ backgroundColor: 'yellow' }}>
            <Text>Hello</Text>
          </View>
          <View style={{ backgroundColor: 'green' }}>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  rowDiv: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  colDiv: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    backgroundColor: "red",
    borderWidth: 2,
    height: '50%',
    width: '50%'
  }
});
