import Map from "./Location"
import React, { Component } from 'react';

export class LocationGPS extends Component {
    constructor(props){
        super(props);
    }

    onMarkerClicked = () => {
        console.log("marker clicked!")
    }
    render(){
        return(
            <div>
                <Map longitude={this.props.longitude} 
                latitude = {this.props.latitude}
                 onMarkerClicked = {this.onMarkerClicked}/>
                 <div></div>
            </div>
        );
    }
}

export default LocationGPS;