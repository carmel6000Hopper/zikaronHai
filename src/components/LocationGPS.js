import { DisplayMapOnScreen } from "./Location"
import React, { Component } from 'react';
import { stat } from "fs";

export class LocationGPS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeName: "",
            imagePlaceSrc: "",
            clickMarker: false,
            markers : [
                {
                    lng:32.6,
                    lat:35,
                    placeName: "1"
                },
                {
                    lng:32.1,
                    lat:32.1,
                    placeName: "2"

                },
                {
                    lng: 34,
                    lat: 32,
                    placeName: "3"

                }
            ]
        }
    }
    // componentWillMount() {
    //     this.setState({ markers: [] })
    // }
    // componentDidMount() {
    //     const url = [
    //         // Length issue
    //         `https://gist.githubusercontent.com`,
    //         `/farrrr/dfda7dd7fccfec5474d3`,
    //         `/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`
    //     ].join("")

        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         this.setState({ markers: data.photos });
        //     });
    

    onMarkerClicked = (place) => {
        let placeName = this.state.placeName;
        let imagePlaceSrc = this.imagePlaceSrc;
        let clickMarker = this.state.clickMarker;
        clickMarker = !clickMarker;
        if (clickMarker === true) {

            console.log("clickMarker is: ", this.state.clickMarker);
            placeName = "Place name " + place + " that need to change ";
            imagePlaceSrc = "src that need to be in the img src"
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
    render(){
        // console.log("markers is: ", this.state.markers);
        // console.log("markers.lat is: ", this.state.markers.lat)
        // console.log("markers.lng is: ", this.state.markers.lng)

        return (
            <div>
                {/* <MapWithAMarkerClusterer markers={this.state.markers} /> */}
                <DisplayMapOnScreen
                    longitude={this.props.longitude}
                    latitude={this.props.latitude}
                    onMarkerClicked={this.onMarkerClicked}
                    markers={this.state.markers}
                    // markersLat = {this.state.markers.lat}
                    // markersLng = {this.state.markers.lng}
                     />

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

// componentWillMount() {
//         this.setState({ markers: [] })
//       }

//       componentDidMount() {
//         const url = [
//           // Length issue
//           `https://gist.githubusercontent.com`,
//           `/farrrr/dfda7dd7fccfec5474d3`,
//           `/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`
//         ].join("")

//         fetch(url)
//           .then(res => res.json())
//           .then(data => {
//             this.setState({ markers: data.photos });
//           });
//       }

//       render() {
//         return (
//           <MapWithAMarkerClusterer markers={this.state.markers} />
//         )
//       }