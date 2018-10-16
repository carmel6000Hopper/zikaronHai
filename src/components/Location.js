// import React, { Component } from 'react';
 // export class LocationGPS extends Component {
 //     constructor() {
//         super();
//         this.state({
//             output: ""
//         });
//         this.geoFindMe = this.geoFindMe.bind(this);
//     }
 //     geoFindMe() {
//         // var output = document.getElementById("out");
 //         //--------------------------//
//         // if-> cant find the location:  //
//         //--------------------------//
//         if (!navigator.geolocation) {
//             // output = "<p>Geolocation is not supported by your browser</p>";
//             this.setState({
//                 output: "<p>Geolocation is not supported by your browser</p>"
//             });
//             return;
//         }
        
//         // -----------------------------------------------------------------------------------------------------//
//         // still inside the "geolocation" function -> the latitude\longitude use the var we put in the function // 
//         //------------------------------------------------------------------------------------------------------//
//         function success(position) {
//             var latitude = position.coords.latitude;
//             var longitude = position.coords.longitude;
 //             // output = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';
//             this.setState({
//                 output: "<p>Latitude is " + latitude + "° <br>Longitude is " + longitude + "°</p>"
//             });
 //             // var img = new Image();
//             // img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";
 //             // output.appendChild(img);
//         }
 //         function error() {
//             // output.innerHTML = "Unable to retrieve your location";
//             this.setState({
//                 output: "Unable to retrieve your location"
//             });
//         }
 //         // output.innerHTML = "<p>Locating…</p>";
//         this.setState({
//             output: "<p>Locating…</p>"
//         })
 //         navigator.geolocation.getCurrentPosition(success, error);
//     }
 //     render() {
//         // if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//         return (
 //             <div>
//                 <div id="root"></div>
 //                 <p><button onclick={this.geoFindMe}>Show my location</button></p>
//                 <p>{this.state.output}</p>
//                 {/* <div id="out"></div> */}
//             </div>
//         );
//     }
// }
 // export default LocationGPS;