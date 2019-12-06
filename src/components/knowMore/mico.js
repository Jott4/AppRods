import React, { Component } from 'react';
import { View, Text, ImageBackground, Button } from 'react-native';

class Mico extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    static navigationOptions = {
        headerTransparent: true,
        headerTintColor: "white",
    }

    render() {
        return (
            <View>
                <ImageBackground source={require('../../../assets/footage/mico.png')}
                    style={{ width: '100%', height: '100%' }}>
                </ImageBackground>
            </View>
        );
    }
}

export default Mico;
