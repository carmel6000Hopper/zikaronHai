import { DisplayMapOnScreen } from "./Location"
import React, { Component } from 'react';
import { stat } from "fs";

export class LocationGPS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            outputPlace: "",
            imagePlaceSrc: "",
            currPlaceName: "",
            markersPlace: [
                {
                    lng: 35.2067,
                    lat: 31.801,
                    placeName: "1"
                },
                {
                    lng: 35.205,
                    lat: 31.802,
                    placeName: "2"
                },
                {
                    lng: 35.207,
                    lat: 31.8023,
                    placeName: "3"
                },
                {
                    lng: 35.2063,
                    lat: 31.8014,
                    placeName: "4"
                }
            ]
        }
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
                        {console.log("lat:::::", this.state.markersPlace)}
                    </div>}
            </div>
        );
    }
}

export default LocationGPS;