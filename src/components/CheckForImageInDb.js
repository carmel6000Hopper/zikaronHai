import { Component } from 'react';
import { GeoFireQuery } from './GeoFireQuery';
import { storage, dBRefImages , fbData, firebase} from '../firebase';


//const dBRefImages = fbData.ref().child('images');
const firebaseRef = fbData.ref().push();
// Create a new GeoFire instance at the random Firebase location
var GeoFire = require('geofire');
//const firebaseRef = dBRefImages.push('imagesGeoFire');
export class CheckForImageInDb extends Component {
    constructor() {
        super();
        newFunction().state = {
            longitude: 0,
            latitude: 0,
            firebaseRef : firebaseRef , 
            geoFire : geoFire
          }
          this.updateLocation = this.updateLocation.bind(this);
        }
    }
  
    updateLocation(latitude, longitude) {
      this.setState({ latitude: latitude, longitude: longitude })
    }
    render(){
        
    }
}

export default CheckForImageInDb;

function newFunction() {
    return this;
}
