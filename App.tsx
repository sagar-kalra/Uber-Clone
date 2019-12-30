import MapView from 'react-native-maps';
import React, { Component } from 'react';
import {
    View, 
  StyleSheet
} from 'react-native';
import { DestinationButton } from './components/DestinationButton';
import {CurrentLocationButton} from './components/CurrentLocationButton'
import Driver from './components/Driver'

interface MyState {
  region: {
    latitude: number,
    longitude: number,
    latitudeDelta: number,
    longitudeDelta: number
  }
}

interface MyProps {}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

class App extends Component<MyProps, MyState> {

  constructor(props : MyProps) {
    super(props);
    this.state = {
        region: {
            latitude: 29.854263,
            longitude: 77.888000,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
    }
  }

  render() {
    return (
      <View style={styles.container}>
          <DestinationButton />
          <CurrentLocationButton />
          
          <MapView
            style={ styles.map }
            initialRegion={this.state.region}
            showsUserLocation={true}  
        >
            <Driver driver={{uid: 'driver 1', location: {
                latitude: 29.854263,
                longitude: 77.888000
            } }}/>
        </MapView>
      </View>
    );
  }

}

export default App;