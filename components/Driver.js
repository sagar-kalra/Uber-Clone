import React, { Component } from 'react';
import {
    Image,
    View
} from 'react-native';
import MapView from 'react-native-maps';

export default class Driver extends Component {
    constructor(props) {
        super(props);

        const driver = this.props.driver ?
            this.props.driver :
            {
                uid : 'noDriverPassed',
                location: {
                    latitude: 0,
                    longitude: 0
                }
            };
        
            const coordinate = new MapView.AnimatedRegion({
                latitude: driver.location.latitude,
                longitude: driver.location.longitude,
                latitudeDelta: 0,
                longitudeDelta: 0
            })

            this.state = {
                driver: driver,
                coordinate: coordinate
            }
        }

            render() {
                return(
                    <MapView.Marker.Animated 
                        coordinate={this.state.coordinate}
                        anchor={{x: 0.35, y: 0.32}}
                        ref={marker => { this.marker = marker }}
                        style={{width: 50, height: 50}}
                    >
                        <Image 
                            source={require('../assets/images/car.png')}
                            style={{
                                width: 32,
                                height: 32
                            }}
                        />
                    </MapView.Marker.Animated>
                );
            }
}