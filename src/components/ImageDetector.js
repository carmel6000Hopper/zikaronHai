import { GeoFireQuery } from './GeoFireQuery';
import { storage, dBRefImages, fbData, firebase } from '../firebase';

const firebaseRef = fbData.ref().child('geoFire').push();
// Create a new GeoFire instance at the random Firebase location
const GeoFire = require('geofire');
export class ImageDetector {
    constructor(longitude, latitude) {
        this.findCloseLocationImage = false;
        this.keyClosestImage = '';
        // TODO change default place
        this.longitude = 0;
        this.latitude = 0;
        this.setFindCloseLocationImage = this.setFindCloseLocationImage.bind(this);
        this.setKeyClosestImage = this.setKeyClosestImage.bind(this);
    }

    setFindCloseLocationImage() {
        console.log("setFindCloseLocationImage")
        this.findCloseLocationImage = true;
    }

    setKeyClosestImage(key) {
        this.keyClosestImage = key;
    }

    checkForImageInDb() {
        checkClosestImageInDb().then(function () {
            if (findCloseLocationImage === true) {
                console.log("checkClosestImageInDb");
                // check if
            }
        });
    }
    checkClosestImageInDb() {
        let geoQuery = this.props.geoFire.query({
            center: [this.props.longitude, this.props.latitude],
            // radius in kilometer
            radius: 0.05
        });
        let onKeyEnteredRegistration = geoQuery.on("key_entered", (key, location) => {
            console.log("location is " + location)
            console.log(key + " entered the query. Hi " + key + "!");
            //this.setState({key, location});
            this.setKeyClosestImage(key);
            this.setFindCloseLocationImage();
            geoQuery.cancel();
        });
    }
}

export default CheckForImageInDb;
