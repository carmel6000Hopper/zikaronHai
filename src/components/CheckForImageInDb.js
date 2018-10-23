import { Component } from 'react';
import { GeoFireQuery } from './GeoFireQuery';
import { storage, dBRefImages, fbData, firebase } from '../firebase';

const firebaseRef = fbData.ref().child('geoFire').push();
// Create a new GeoFire instance at the random Firebase location
var GeoFire = require('geofire');
export class CheckForImageInDb extends Component {
    constructor() {
        super();
        newFunction().state = {
            longitude: 0,
            latitude: 0,
            firebaseRef: firebaseRef,
            geoFire: geoFire
        }
        this.updateLocation = this.updateLocation.bind(this);
    }
    updateLocation(latitude, longitude) {
        this.setState({ latitude: latitude, longitude: longitude })
    }
    render() {
        return <GeoFireQuery longitude={this.props.longitude} latitude={this.props.latitude} geoFire = {this.state.geoFire}/>

    }
}

export default CheckForImageInDb;
