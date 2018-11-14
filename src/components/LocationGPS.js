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
            markersPlace: []
        }
    }

    componentDidMount() {
        this.getPlacesCoordinates();
    }
    getPlacesCoordinates = () => {
        const fbD = firebase.database();
        const dBRefI = fbD.ref();

        //const dBRefI = fbD.ref();
        console.log("fireBase images: ", dBRefI);
        console.log("dbRefImages",dBRefImages);
        var Places = this.state.markersPlace.slice();
        dBRefI.once('value',  (snapshot) => {
            console.log(snapshot);
            console.log(snapshot.val());
            // TODO find how to do once only for images
            var images = snapshot.val().images;
            let imagesValues = Object.values(images);
            var keys = Object.keys(images)
            var i = 0
            imagesValues.map((image) =>
                Places.push({ lng: image.gps_longitude, lat: image.gps_latitude, placeName: keys[i] }))
                i = i+1
            console.log("in get Places Coordinates");
            console.log(Places);

            this.setState({ markersPlace: Places })
        }) ;
        dBRefImages.off("value");
      
        }
    
    onMarkerClicked = (place) => {
        let outputPlace = this.state.outputPlace;
        let imagePlaceSrc = this.imagePlaceSrc;
        let currPlaceName = this.state.currPlaceName;
        if (currPlaceName !== place) {
            outputPlace = "Place name " + place + " that need to change ";
            imagePlaceSrc = "src that need to be in the img src"
            currPlaceName = place;
            console.log("cuurent place is: ", currPlaceName);
            this.setState({ outputPlace: outputPlace });
            this.setState({ imagePlaceSrc: imagePlaceSrc });
            this.setState({ currPlaceName: currPlaceName });
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
                        <h3>{this.state.imagePlaceSrc}</h3>
                        <img src={this.state.imagePlaceSrc}></img>
                    </div>}
            </div>
        );
    }
}

export default LocationGPS;