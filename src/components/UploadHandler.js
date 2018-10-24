import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ImageUpload } from './ImageUpload';
//import { CheckForImageInDb } from './ImageDetector';
import { storage, dBRefImages, fbData, firebase } from '../firebase';

const firebaseRef = fbData.ref().child('geoFire').push();
// Create a new GeoFire instance at the random Firebase location
var GeoFire = require('geofire');
const geoFire = new GeoFire(firebaseRef);

export class UploadHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasToUpload: true
        };
        this.setHasToUpload = this.setHasToUpload.bind(this);
    }
    setHasToUpload() {
        console.log("set Has to Upload")
        this.setState({ hasToUpload: true });
    }
    render() {
        const hasToUpload = this.state.hasToUpload;
        return (
            <div>
                {/* <CheckForImageInDb setHasToUpload={this.setHasToUpload}
                    longitude={this.props.longitude}
                    latitude={this.props.latitude}
                    geoFire={geoFire} />
                {hasToUpload ? (
                    < ImageUpload imageUrlArray={this.props.imageUrlArray}
                        longitude={this.props.longitude}
                        latitude={this.props.latitude}
                        geoFire={geoFire} />
                ) : (
                        <p>כבר קיים שלט במקום הצויין</p>
                    )} */}
            </div>
        );
    }
}
