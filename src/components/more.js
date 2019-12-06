import React from 'react';
import { StyleSheet, View, TouchableOpacity, ImageBackground } from 'react-native';

export default class More extends React.Component {
  static navigationOptions = {
    headerTransparent: true,
    headerTintColor: "white",
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/footage/backgroundconhecer.png')}
          style={{ width: '100%', height: '100%' }}>
        </ImageBackground>
        <TouchableOpacity   //raposa
          style={styles.buttonRaposa}
          onPress={() => { }}
        >
        </TouchableOpacity>

        <TouchableOpacity   //mico
          style={styles.buttonMico}
          onPress={() => this.props.navigation.navigate('Mico')}
        >
        </TouchableOpacity>

        <TouchableOpacity   //sapo
          style={styles.buttonSapo}
          onPress={() => this.props.navigation.navigate('Sapo')}
        >
        </TouchableOpacity>

        <TouchableOpacity   //veado
          style={styles.buttonVeado}
          onPress={() => this.props.navigation.navigate('Veado')}
        >
        </TouchableOpacity>

        <TouchableOpacity   //arara
          style={styles.buttonArara}
          onPress={() => { }}
        >
        </TouchableOpacity>

        <TouchableOpacity   //coelho
          style={styles.buttonCoelho}
          onPress={() => { }}
        >
        </TouchableOpacity>

        <TouchableOpacity   //bambi
          style={styles.buttonBambi}
          onPress={() => { }}
        >
        </TouchableOpacity>


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
  buttonRaposa: {
    position: 'absolute',
    width: 90,
    height: 210,
    top: 480,
    left: 150,
    backgroundColor: 'rgba(255,0,0,0.3)',
  },
  buttonMico: {
    position: 'absolute',
    width: 65,
    height: 110,
    top: 510,
    left: 0,
    backgroundColor: 'rgba(255,0,0,0.3)',
  },
  buttonSapo: {
    position: 'absolute',
    width: 60,
    height: 60,
    top: 580,
    left: 310,
    backgroundColor: 'rgba(255,0,0,0.3)',
  },
  buttonBambi: {
    position: 'absolute',
    width: 60,
    height: 50,
    top: 490,
    left: 80,
    backgroundColor: 'rgba(255,0,0,0.3)',
  },
  buttonVeado: {
    position: 'absolute',
    width: 60,
    height: 100,
    top: 400,
    left: 5,
    backgroundColor: 'rgba(255,0,0,0.3)',
  },
  buttonArara: {
    position: 'absolute',
    width: 160,
    height: 140,
    top: 150,
    left: 260,
    backgroundColor: 'rgba(255,0,0,0.3)',
  },
  buttonCoelho: {
    position: 'absolute',
    width: 40,
    height: 75,
    top: 437,
    left: 375,
    backgroundColor: 'rgba(255,0,0,0.3)',
  },



});
