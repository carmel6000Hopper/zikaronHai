import Map from "./Location"
import React, { Component } from 'react';

export class LocationGPS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeName: "",
            imagePlaceSrc: "",
            clickMarker: false
        }
    }

    onMarkerClicked = () => {
        let placeName = this.state.placeName;
        let imagePlaceSrc = this.imagePlaceSrc;
        let clickMarker = this.state.clickMarker;
        clickMarker = !clickMarker;
        if (clickMarker === true) {

            console.log("clickMarker is: ", this.state.clickMarker);
            placeName = "Place name that need to change";
            imagePlaceSrc = "src that need to be in the img src tag"
            this.setState({ placeName: placeName });
            this.setState({ imagePlaceSrc: imagePlaceSrc });
            this.setState({ clickMarker: clickMarker });
        }

        else {
            console.log("clickMarker is: ", this.state.clickMarker)
            placeName = "";
            imagePlaceSrc = "";
            this.setState({ placeName: placeName });
            this.setState({ imagePlaceSrc: imagePlaceSrc });
            this.setState({ clickMarker: clickMarker });
        }

        console.log("img src: ", this.state.imagePlaceSrc);


    }
    render() {
        return (
            <div>
                <Map longitude={this.props.longitude}
                    latitude={this.props.latitude}
                    onMarkerClicked={this.onMarkerClicked} />
                    {this.state.imagePlaceSrc === "" ? 
                    <div></div>
                    :
                <div>
                    <h3>{this.state.placeName}</h3>
                    <h3>{this.state.imagePlaceSrc}</h3>
                    <img src={this.state.imagePlaceSrc}></img>
                </div>}
            </div>
        );
    }
}

export default LocationGPS;