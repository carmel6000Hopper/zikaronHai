import { storage, dBRefImages } from '../firebase';
import React, { Component } from 'react';

// import { firebaseRef, geoFire } from './ImageUpload'

export class GeoFireQuery extends Component {
    
    render() {
        var GeoFire = require('geofire');
        // Create a GeoQuery centered at fish2
        var geoQuery = this.props.geoFire.query({
            center: [this.props.longitude, this.props.latitude],
            radius: 1000
        });
        var onKeyEnteredRegistration = geoQuery.on("key_entered", function (key, location) {
            console.log("hi")
            console.log(key + " entered the query. Hi " + key + "!");
        });
        console.log("latitude is ", this.props.latitude);
        console.log("longitude is ", this.props.longitude);
        console.log("geoQuery is ", geoQuery);
        console.log("this.props.geoFire is ", this.props.geoFire);
        return (
            <h1>HI geoQuery</h1>
        );
      
        // // Cancel the "key_moved" callback when the corresponding button is clicked
        // document.getElementById("cancelKeyMovedCallbackButton").addEventListener("click", function () {
        //     log("*** 'key_moved' callback cancelled ***");
        //     onKeyMovedRegistration.cancel();
        // });
    }
}

export default GeoFireQuery;