import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

interface MyProps {
    cb?: Function,
    bottom?: number
}

export const CurrentLocationButton = function(props: MyProps) {
    const cb = props.cb ? props.cb : () => console.log("Callback function has not been passed.");
    const bottom = props.bottom ? props.bottom : 65;

    return(
        <View style = {[styles.container, {top: HEIGHT - bottom}]}>
            <Icon  
            name = 'gps-fixed' 
            size={25}
            onPress={() => { cb() }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        zIndex: 9,
        position: 'absolute',
        width: 45,
        height: 45,
        borderRadius: 100,
        backgroundColor: '#fff',
        left: WIDTH - 70,
        shadowColor: '#000',
        elevation: 7,
        shadowRadius: 5,
        shadowOpacity: 1.0,
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})