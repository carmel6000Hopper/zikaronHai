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