import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Camera extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Filtro do insta mto zika tchuplaftchuplim</Text>

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
