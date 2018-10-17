import React, { Component } from 'react';
import { storage, dBRefImages } from '../firebase';
import carmelLogo from '../images/carmel6000logo.jfif'
import dataURItoBlob from '../helpFunction'
import {GPS} from './GPS'
import {style, styleCount} from './ImageStyle'
// WARNING - not thread safe
var imageCounter = 0;

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      longitude: 0,
      latitude: 0
    }
    this.handleUpload = this.handleUpload.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
    this.uploadImagesToDb = this.uploadImagesToDb.bind(this);

  }
  updateLocation(latitude, longitude){
    this.setState({ latitude: latitude, longitude: longitude })
  }
  uploadImagesToDb(imageUrl, gps) {
    console.log("uploadImagesToDb");
    console.log("image Url is " +imageUrl);
    var imageInfos = {};
    // TODO : ADD AUTH
    //imageInfos['userId'] = isUserSignedIn() ? firebase.auth().currentUser.uid : "no-uid";
    imageInfos['userId'] = "no-uid";
    imageInfos['gps_longitude'] = this.state.longitude;
    imageInfos['gps_latitude'] =  this.state.latitude;
    imageInfos['name'] = 'name';
    const uploadToDb = dBRefImages.push(
      imageInfos, function onComplete(err) {
        if (err) {
          alert("uploadImageInfosToDB: push failed with " + err);
        } else {
          console.log("uploadImageInfosToDB: done");
        }
      });
    var dbKey = uploadToDb.key;
    console.log("dbKey is " + dbKey);
    return dbKey;

  }

  handleUpload() {
    const urlArr = this.props.imageUrlArr;
    console.log("url is " + urlArr);
    for (var i = 0; i < urlArr.length; i++) {
      var blob = dataURItoBlob(urlArr[i]);
      console.log("blob " + blob);
      var key = this.uploadImagesToDb(urlArr[i], 0);
      console.log("key is " + key);
      storage.ref(`images/${key}`).put(blob).then(function (snapshot) {
        console.log('Uploaded an array!');
        imageCounter++;
      });
    }

  }
  render() {
   
    return (
      <div style={style} >
        מתעדים את שלטי המורשת
      <br /><br />
        <br />
        <button onClick={this.handleUpload}>upload</button>
        <br />
        <div style={styleCount} className="counter" ><h2>עד כה צולמו {imageCounter}  שלטים</h2></div>
        <br />
        <h3><GPS updateLocation = {this.updateLocation} /></h3>
        <img src={carmelLogo} height="60" alt="carmel 6000 logo" />
        <button onClick={() => { this.props.history.push('/') }} >back</button>
      </div>
    )
  }
}


export default ImageUpload;


