import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Explore extends React.Component {

  render() {
    return (

      <View style={styles.container}>
        <Text>Video do yt</Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
