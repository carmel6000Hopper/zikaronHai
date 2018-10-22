import React from 'react'
import { compose, withProps, componentFromProp } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


export const DisplayMapOnScreen =  compose(
  withProps({
    //אישור להשתמש בגוגל מפות api
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCOkNwkwX1xa59m94TYXKXzmBYBnhQZCGE&callback=initMap",
    loadingElement: <div style={{ height: `100%` }} />,
    //map size on screen
    containerElement: <div style={{ height: `400px` }} />,
    //כמה מהפיקסלים יתפוס המפה
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)
((props) =>
  <GoogleMap
    defaultZoom={18}
    defaultCenter={{ lat: {...props}.latitude , lng: {...props}.longitude}} >

    <Marker
      position={{ lat:{...props}.latitude , lng: {...props}.longitude }}
    />
  </GoogleMap>

);
export default DisplayMapOnScreen;













// //-----------------------------------------------------
// // import React, { Component } from 'react';
// // import './GPS.css';
// // // import LocationMarker from './Icons/gps-fixed-indicator-black.png';
// // //import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

// // // let google = undefined;
// // // let map = undefined;


// // export class LocationGPS extends Component {

// //   componentDidMount() {
// //     // function initMap() {

// //     const script = document.createElement("script");
// //     script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCOkNwkwX1xa59m94TYXKXzmBYBnhQZCGE&callback=initMap";
// //     script.async = true;
// //     document.body.appendChild.apply(script);
// //     let map = new google.maps.Map(document.getElementById('map'), {
// //       center: { lat: -33.8688, lng: 151.2195 },
// //       zoom: 13
// //     });

// //     let input = document.getElementById('pac-input');

// //     let autocomplete = new google.maps.places.Autocomplete(input);
// //     autocomplete.bindTo('bounds', map);

// //     map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

// //     let infowindow = new google.maps.InfoWindow();
// //     let infowindowContent = document.getElementById('infowindow-content');
// //     infowindow.setContent(infowindowContent);
// //     let marker = new google.maps.Marker({
// //       map: map
// //     });
// //     marker.addListener('click', function () {
// //       infowindow.open(map, marker);
// //     });

// //     autocomplete.addListener('place_changed', function () {
// //       infowindow.close();
// //       let place = autocomplete.getPlace();
// //       if (!place.geometry) {
// //         return;
// //       }

// //       if (place.geometry.viewport) {
// //         map.fitBounds(place.geometry.viewport);
// //       } else {
// //         map.setCenter(place.geometry.location);
// //         map.setZoom(17);
// //       }

// //       // Set the position of the marker using the place ID and location.
// //       marker.setPlace({
// //         placeId: place.place_id,
// //         location: place.geometry.location
// //       });
// //       marker.setVisible(true);

// //       infowindowContent.children['place-name'].textContent = place.name;
// //       infowindowContent.children['place-id'].textContent = place.place_id;
// //       infowindowContent.children['place-address'].textContent =
// //         place.formatted_address;
// //       infowindow.open(map, marker);

      
// //     });
// //     //let src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCOkNwkwX1xa59m94TYXKXzmBYBnhQZCGE&callback=initMap";
// //   }

// //     render(){
// //       return (
// //         <div>
// //           <div id="map"></div>
// //           {/* <!--open when place name enter--> */}
// //           <div id="infowindow-content">
// //             {/* <!--(still in the div) place name in the window of the place--> */}
// //             <span id="place-name" class="title"></span><br />
// //             {/* <!--place ID--> */}
// //             Place ID <span id="place-id"></span><br />
// //             {/* <!--place address--> */}
// //             <span id="place-address"></span>
// //           </div>
// //           <button onClick={() => { this.props.history.push('/') }} >back</button>


// //         </div>
// //       );
      
// //   }
// // }


// // export default LocationGPS;



// //--------------------------------------------
// //   buildMap(){
// //     let initialPosition;
// //     if ('geolocation' in navigator) {
// //       navigator.geolocation.getCurrentPosition(
// //         position => {
// //           initialPosition = { lat: position.coords.latitude, lng: position.coords.longitude };
// //           this.createMap(initialPosition);
// //           setInterval(()=>{this.trackLocation()}, 3000);
// //         },
// //         err => alert(`Error (${err.code}): ${err.message}`)
// //       );
// //     } else {
// //       alert('Geolocation is not supported by your browser.');
// //     }
// //   }

// //   trackLocation(){
// //     let thisposition;

// //     if ('geolocation' in navigator) {
// //       navigator.geolocation.getCurrentPosition(
// //         position => {
// //           thisposition = { lat: position.coords.latitude, lng: position.coords.longitude };
// //           this.updateMarker(thisposition);
// //         },
// //         err => alert(`Error (${err.code}): ${err.message}`)
// //       );
// //     } else {
// //       alert('Geolocation is not supported by your browser.');
// //     }
// //   }

// //   createMap(initialPosition){
// //     console.log(initialPosition);
// //     map = new google.maps.Map(document.getElementById('map'), {
// //       center: initialPosition,
// //       zoom: 18
// //     });
// //     google.maps.event.addListener(map, "click", function (event) {
// //       console.log("Click");
// //       console.log(event);
// //       event.stop();
// //       if(event.placeId){
// //         console.log(event.placeId);
// //         let geo = new google.maps.Geocoder;
// //         geo.geocode({'placeId': event.placeId}, function(results, status) {
// //           console.log(results);
// //           console.log(status);
// //         });

// //         var service = new google.maps.places.PlacesService(map);
// //         service.getDetails({
// //           placeId: event.placeId
// //         }, function(place, status) {
// //           console.log(place);
// //           console.log(status);
// //         });
// //       }
// //     });
// //     console.log(map);
// //     this.updateMarker(initialPosition);
// //   }

// //   updateMarker(position){
// //     const marker = new google.maps.Marker({ 
// //       map: map, 
// //       position: position,
// //       // icon: LocationMarker
// //     });
// //       setInterval(() => marker.setMap(null), 3000);
// //       console.log(position);
// //   }

// //   initMap() {
// //     google = window.google;

// //     this.buildMap();

// //   };

// //   componentDidMount() {
// //     window.initMap = this.initMap.bind(this);
// //     const script = document.createElement('script')
// //     script.async = true;
// //     script.defer = true;
// //     script.src = "https://maps.googleapis.com/maps/api/js?&key=AIzaSyChYvYh7SSlD--f6V--9bIuUf-5SaFFa1A&libraries=places&callback=initMap";
// //     document.head.appendChild(script)


// //   }

// //   render() {
// //     return ( <div  style = {
// //         {
// //           width: "100vw",
// //           height: "100vh"
// //         }
// //       } id = "map" > 
// //       </div>
// //     );
// //   }
// // }
// // export default LocationGPS;

// //--------------------------------------

// // import React, { Component } from 'react';
// // import './GPS.css';
// // // import { withGoogleMap, GoogleMap } from 'react-google-maps';
// // // import {GoogleApiWrapper} from 'google-maps-react';
// // // import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


// // export class LocationGPS extends Component {


// //     initMap() {
// //         var map = new google.maps.Map(document.getElementById('map'), {
// //           center: {lat: -33.8688, lng: 151.2195},
// //           zoom: 13
// //         });

// //         var input = document.getElementById('pac-input');

// //         var autocomplete = new google.maps.places.Autocomplete(input);
// //         autocomplete.bindTo('bounds', map);

// //         map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

// //         var infowindow = new google.maps.InfoWindow();
// //         var infowindowContent = document.getElementById('infowindow-content');
// //         infowindow.setContent(infowindowContent);
// //         var marker = new google.maps.Marker({
// //           map: map
// //         });
// //         marker.addListener('click', function() {
// //           infowindow.open(map, marker);
// //         });

// //         autocomplete.addListener('place_changed', function() {
// //           infowindow.close();
// //           var place = autocomplete.getPlace();
// //           if (!place.geometry) {
// //             return;
// //           }

// //           if (place.geometry.viewport) {
// //             map.fitBounds(place.geometry.viewport);
// //           } else {
// //             map.setCenter(place.geometry.location);
// //             map.setZoom(17);
// //           }

// //           // Set the position of the marker using the place ID and location.
// //           marker.setPlace({
// //             placeId: place.place_id,
// //             location: place.geometry.location
// //           });
// //           marker.setVisible(true);

// //           infowindowContent.children['place-name'].textContent = place.name;
// //           infowindowContent.children['place-id'].textContent = place.place_id;
// //           infowindowContent.children['place-address'].textContent =
// //               place.formatted_address;
// //           infowindow.open(map, marker);
// //         });
// //       }

// //     render() {
// //         return (
// //             <div>
// //                 <div id="map"></div>
// //                 {/* <!--open when place name enter--> */}
// //                 <div id="infowindow-content">
// //                     {/* <!--(still in the div) place name in the window of the place--> */}
// //                     <span id="place-name" class="title"></span><br/>
// //                         {/* <!--place ID--> */}
// //                         Place ID <span id="place-id"></span><br/>
// //                             {/* <!--place address--> */}
// //                             <span id="place-address"></span>
// //                         </div>
// //                         <button onClick={() => { this.props.history.push('/') }} >back</button>
// //             </div>
// //                     );
// //                 }
// //             }
// //             export default LocationGPS;






// //  //     constructor() {
// // //         super();
// // //         this.state({
// // //             output: ""
// // //         });
// // //         this.geoFindMe = this.geoFindMe.bind(this);
// // //     }
// //  //     geoFindMe() {
// // //         // var output = document.getElementById("out");
// //  //         //--------------------------//
// // //         // if-> cant find the location:  //
// // //         //--------------------------//
// // //         if (!navigator.geolocation) {
// // //             // output = "<p>Geolocation is not supported by your browser</p>";
// // //             this.setState({
// // //                 output: "<p>Geolocation is not supported by your browser</p>"
// // //             });
// // //             return;
// // //         }

// // //         // -----------------------------------------------------------------------------------------------------//
// // //         // still inside the "geolocation" function -> the latitude\longitude use the var we put in the function // 
// // //         //------------------------------------------------------------------------------------------------------//
// // //         function success(position) {
// // //             var latitude = position.coords.latitude;
// // //             var longitude = position.coords.longitude;
// //  //             // output = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';
// // //             this.setState({
// // //                 output: "<p>Latitude is " + latitude + "° <br>Longitude is " + longitude + "°</p>"
// // //             });
// //  //             // var img = new Image();
// // //             // img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";
// //  //             // output.appendChild(img);
// // //         }
// //  //         function error() {
// // //             // output.innerHTML = "Unable to retrieve your location";
// // //             this.setState({
// // //                 output: "Unable to retrieve your location"
// // //             });
// // //         }
// //  //         // output.innerHTML = "<p>Locating…</p>";
// // //         this.setState({
// // //             output: "<p>Locating…</p>"
// // //         })
// //  //         navigator.geolocation.getCurrentPosition(success, error);
// // //     }
// //  //     render() {
// // //         // if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
// // //         return (
// //  //             <div>
// // //                 <div id="root"></div>
// //  //                 <p><button onclick={this.geoFindMe}>Show my location</button></p>
// // //                 <p>{this.state.output}</p>
// // //                 {/* <div id="out"></div> */}
// // //             </div>
// // //         );
// // //     }
// // // }
// // export default LocationGPS;