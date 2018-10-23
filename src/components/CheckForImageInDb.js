import React, { Component } from 'react';
import { GeoFireQuery } from './GeoFireQuery';
import { storage, dBRefImages, fbData, firebase } from '../firebase';

const firebaseRef = fbData.ref().child('geoFire').push();
// Create a new GeoFire instance at the random Firebase location
var GeoFire = require('geofire');
export class CheckForImageInDb extends Component {
    constructor() {
        super();
        this.state = {
            findCloseLocationImage: false,
            keyClosestImage: ''
        }
        this.setFindCloseLocationImage = this.setFindCloseLocationImage.bind(this);
        this.setKeyClosestImage = this.setKeyClosestImage.bind(this);
    }

    setFindCloseLocationImage() {
        console.log("setFindCloseLocationImage")
        this.setState({ findCloseLocationImage: true });
       
    }
    setKeyClosestImage(key) {
        this.setState({ keyClosestImage: key });
    }
    render() {
        return (
            <div>
                <p>In check for image in Db</p>
                <GeoFireQuery longitude={this.props.longitude}
                    latitude={this.props.latitude}
                    geoFire={this.props.geoFire}
                    setFindCloseLocationImage={this.setFindCloseLocationImage}
                    setKeyClosestImage={this.setKeyClosestImage} />

            </div>
        );
    }
}

export default CheckForImageInDb;
