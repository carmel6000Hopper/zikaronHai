import { storage, dBRefImages } from '../firebase';
import React, { Component } from 'react';

// import { firebaseRef, geoFire } from './ImageUpload'

export class GeoFireQuery extends Component {
    constructor(props){
        super(props);
        this.state = {
            key: '',
            location: ''
        }
    }
    render() {
        var GeoFire = require('geofire');
        // Create a GeoQuery
        var geoQuery = this.props.geoFire.query({
            center: [this.props.longitude, this.props.latitude],
            radius: 100
        });
        var onKeyEnteredRegistration = geoQuery.on("key_entered", function (key, location) {
            console.log("location is " + location)
            console.log(key + " entered the query. Hi " + key + "!");
            this.setState({key: key, location:location});
        });
        // Cancel all of the query's callbacks
        onKeyEnteredRegistration.cancel();
        return (
            <p>key is {this.state.key} and the location is {this.state.location}</p>
        );
    }
}

export default GeoFireQuery;