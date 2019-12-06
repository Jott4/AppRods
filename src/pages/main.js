import React, { Component } from 'react';
import { View, Text, } from 'react-native';

import Home from '../components/Home';
import Camera from '../components/camera';
import Explore from '../components/Explore';
import More from '../components/more';
import Mico from '../components/knowMore/mico';
import Sapo from '../components/knowMore/sapo';
import Veado from '../components/knowMore/veado';


import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator({
    Home,
    Camera,
    Explore,
    More,
    Mico,
    Sapo,
    Veado,
}, {
    navigationOptions: {
        position: 'absolute',
        backgroundColor: 'transparent',
        zIndex: 100,
        top: 0,
        left: 0,
        right: 0
        },
})

export default class Main extends Component {
    render() {
        return <RootStack />
    }
}