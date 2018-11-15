import { DisplayMapOnScreen } from "./DisplayMap"
import React, { Component } from 'react';
import { stat } from "fs";
import { dBRefImages, firebase } from '../firebase'

export class LocationGPS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            outputPlace: "",
            imagePlaceSrc: "",
            currPlaceName: "",
            markersPlace: [],

        }
    }

    componentDidMount() {
        this.getPlacesCoordinates();
    }

    getPlaceImage = (key) => {
        const stor = firebase.storage();
        const storRef = stor.ref('images/' + key);
        storRef.getDownloadURL().then( (url) => {
            this.setState({ imagePlaceSrc: url })
          }).catch(function(error) {
            console.log(error)
          })
    }

    getPlacesCoordinates = () => {
        const fbD = firebase.database();
        const dBRefI = fbD.ref();
        var Places = this.state.markersPlace.slice();
        dBRefI.once('value', (snapshot) => {
            var images = snapshot.val().images;
            let imagesValues = Object.values(images);
            let keys = Object.keys(images)
            var i = 0
            imagesValues.map((image) =>
                Places.push({ lng: image.gps_longitude, lat: image.gps_latitude, placeKey: keys[i], placeName: image.name },
                    i = i + 1)
            )

            this.setState({ markersPlace: Places })
        });
        dBRefImages.off("value");
    }

    onMarkerClicked = (placeKey, placeName) => {
        let outputPlace = this.state.outputPlace;
        let imagePlaceSrc = this.state.imagePlaceSrc;
        let currPlaceName = this.state.currPlaceName;
        let currPlaceKey = this.state.currPlaceKey;
        if (currPlaceKey !== placeKey) {
            outputPlace = "Place name " + placeName + " that need to change ";
            this.getPlaceImage(placeKey);
            currPlaceKey = placeKey;
            currPlaceName = placeName;
            console.log("cuurent place is: ", currPlaceName);
            this.setState({ outputPlace: outputPlace });
            this.setState({ currPlaceKey: currPlaceKey });
        }
        else {
            outputPlace = "";
            imagePlaceSrc = "";
            currPlaceName = "";
            console.log("cuurent place is: ", currPlaceName);
            this.setState({ outputPlace: outputPlace });
            this.setState({ imagePlaceSrc: imagePlaceSrc });
            this.setState({ currPlaceName: currPlaceName });
        }

        console.log("img src: ", this.state.imagePlaceSrc);
    }


    render() {
        return (
            <div>
                <DisplayMapOnScreen
                    longitude={this.props.longitude}
                    latitude={this.props.latitude}
                    onMarkerClicked={this.onMarkerClicked}
                    markersPlace={this.state.markersPlace}
                />
                {this.state.imagePlaceSrc === "" ?
                    <div></div>
                    :
                    <div>
                        <h3>{this.state.outputPlace}</h3>
                        {/* <h3>{this.state.imagePlaceSrc}</h3> */}
                        <img src={this.state.imagePlaceSrc}></img>
                    </div>}
            </div>
        );
    }
}

export default LocationGPS;