import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native';


export default class Home extends React.Component {
    static navigationOptions = {
        headerTransparent: true,
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.background}>
                    <ImageBackground source={require('../../assets/footage/background.png')}
                        style={{ width: '100%', height: '100%', }} />

                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.touchable} onPress={
                        () => this.props.navigation.navigate('Explore')
                    }>

                        <Image
                            source={require('../../assets/footage/descobrir.png')}
                            style={styles.ImageIconStyle}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.touchable} onPress={
                        () => this.props.navigation.navigate('Camera')
                    }>

                        <Image
                            source={require('../../assets/footage/camera.png')}
                            style={styles.ImageIconStyle}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.touchable} onPress={
                        () => this.props.navigation.navigate('More')
                    }>
                        <Image
                            source={require('../../assets/footage/conhecer.png')}
                            style={styles.ImageIconStyle}
                        />

                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {            //tudo

    },
    touchable: {            //o botao

    },
    ImageIconStyle: {       //img do botao


    },
    background: {           //background
        position: 'absolute',
        height: 753,
        width: 424,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },

});
