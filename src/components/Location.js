import React from 'react'
import { compose, withProps, componentFromProp } from "recompose"
import { MapWithAMarker, withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
// import mapSign from '../images/locationSign.png';
// import yourLocation from '../images/map-placeholder.png';
import yourLocation from '../images/map-marker.png';
import mapSign  from '../images/map-markers-signs.png';

// --------------OLD CODE -------------------------------------------

export const DisplayMapOnScreen = compose(
  withProps({
    //אישור להשתמש בגוגל מפות api
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCOkNwkwX1xa59m94TYXKXzmBYBnhQZCGE&callback=initMap",
    loadingElement: <div style={{ height: `100%` }} />,
    //map size on screen
    containerElement: <div style={{ height: `400px`}} />,
    //כמה מהפיקסלים יתפוס המפה
    mapElement: <div style={{ height: `100%` }} />,
  }),
  // --------------------------
  withScriptjs,
  // --------------------------
  withGoogleMap
)

  ((props) => {
    return (
      <div>
        <GoogleMap
          defaultZoom={17}  
          // defaultCenter={{ lat:32.6, lng: 35 }} >
          defaultCenter={{ lat: { ...props }.latitude, lng: { ...props }.longitude }} >


          {/* ---------------------Your location Marker--------------------------------- */}
          <Marker
            position={{
              lat: { ...props }.latitude,
              lng: { ...props }.longitude
            }}
            onClick={(place) => props.onMarkerClicked("jerusalem")}
            // className="marker-style"
            icon={yourLocation}
          />

          {/* ------------------- diferent location Marker--------------------------------------- */}
          {props.markersPlace.map((pos) => <Marker
            position={{ lat: pos.lat, lng: pos.lng }}
            onClick={(place) => props.onMarkerClicked(pos.placeName)}
            icon={mapSign}
            // icon="http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
            className="map-sign"
          />)}
        </GoogleMap>

      </div>
    )
  }

  );

export default DisplayMapOnScreen;

// -------------------------------END----------------------------------------

// ---------------TRYING------------------------------------------------------

// const fetch = require("isomorphic-fetch");
// const { compose, withProps, withHandlers } = require("recompose");
// const {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker,
// } = require("react-google-maps");
// const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");

// const MapC = compose(
//   withProps({
//     googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCOkNwkwX1xa59m94TYXKXzmBYBnhQZCGE&v=3.exp&libraries=geometry,drawing,places",
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `400px` }} />,
//     mapElement: <div style={{ height: `100%` }} />,
//   }),
//   withHandlers({
//     onMarkerClustererClick: () => (markerClusterer) => {
//       const clickedMarkers = markerClusterer.getMarkers()
//       console.log(`Current clicked markers length: ${clickedMarkers.length}`)
//       console.log(clickedMarkers)
//     },
//   }),
//   withScriptjs,
//   withGoogleMap
// )(props =>
//   <GoogleMap
//     defaultZoom={3}
//     defaultCenter={{ lat: 25.0391667, lng: 121.525 }}
//   >
//     <MarkerClusterer
//       onClick={props.onMarkerClustererClick}
//       averageCenter
//       enableRetinaIcons
//       gridSize={60}
//     >
//       {props.markers.map(marker => (
//         <Marker
//           key={marker.photo_id}
//           position={{ lat: marker.latitude, lng: marker.longitude }}
//         />
//       ))}
//     </MarkerClusterer>
//   </GoogleMap>
// );

// export class DisplayMapOnScreen extends React.PureComponent {
//   componentWillMount() {
//     this.setState({ markers: [] })
//   }

//   componentDidMount() {
//     const url = [
//       // Length issue
//       `https://gist.githubusercontent.com`,
//       `/farrrr/dfda7dd7fccfec5474d3`,
//       `/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`
//     ].join("")

//     fetch(url)
//       .then(res => res.json())
//       .then(data => {
//         this.setState({ markers: data.photos });
//       });
//   }

//   render() {
//     return (
//       <MapC markers={this.state.markers} />
//     )
//   }
// }

// export default DisplayMapOnScreen;



// ----------------------------------------------------------------------












/*
import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { typography } from 'material-ui/styles';


export class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }
  render() {
    const style = {
      width: '50vw',
      height: '75vh',
      'marginLeft': 'auto',
      'marginRight': 'auto'
    }
    return (
      <Map
        item
        xs = { 12 }
        style = { style }
        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = { 14 }
        initialCenter = {{ lat: 39.648209, lng: -75.711185 }}
      >
        <Marker
          onClick = { this.onMarkerClick }
          title = { 'Changing Colors Garage' }
          position = {{ lat: 39.648209, lng: -75.711185 }}
          name = { 'Changing Colors Garage' }
        />
        <InfoWindow
          marker = { this.state.activeMarker }
          visible = { this.state.showingInfoWindow }
        >
          <Paper>
            <Typography
              variant = 'headline'
              component = 'h4'
            >
              Changing Colors Garage
            </Typography>
            <Typography
              component = 'p'
            >
              98G Albe Dr Newark, DE 19702 <br />
              302-293-8627
            </Typography>
          </Paper>
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
    api: (process.env.AIzaSyCOkNwkwX1xa59m94TYXKXzmBYBnhQZCGE
      )
})(GoogleMapsContainer)

*/