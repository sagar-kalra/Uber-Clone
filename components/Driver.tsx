import React, { Component } from 'react';
import {
    Image,
    View,
    Animated
} from 'react-native';
import {AnimatedRegion, MarkerAnimated} from 'react-native-maps';

interface MyProps {
    driver: {
        uid: string,
        location: {
            latitude: number,
            longitude: number
        }
    }
}

interface MyState extends MyProps {
    coordinate: AnimatedRegion
}

export default class Driver extends Component<MyProps, MyState> {
    marker!: MarkerAnimated | null;
    constructor(props: MyProps) {
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
        
            const coordinate = new AnimatedRegion({
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
                    <MarkerAnimated 
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
                    </MarkerAnimated>
                );
            }
}