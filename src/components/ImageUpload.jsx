import React, {Component} from 'react';
import {storage, dBRefImages} from '../firebase';
import carmelLogo from '../images/carmel6000logo.jfif'
// WARNING - not thread safe
var imageCounter = 0 ;

function dataURItoBlob(dataURI) {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(dataURI.split(',')[1]);

  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  // write the bytes of the string to an ArrayBuffer
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], {type: mimeString});
}

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.handleUpload = this.handleUpload.bind(this);
  }
  handleUpload () {
    const urlArr = this.props.imageUrlArr;
    console.log("url is " + urlArr);
    for (var i = 0; i < urlArr.length; i++) {
      var blob = dataURItoBlob(urlArr[i]);
      console.log("blob " + blob);
      var key = uploadImagesToDb(urlArr[i], 0);
      console.log("key is " +key);
      storage.ref(`images/${key}`).put(blob).then(function(snapshot) {
        console.log('Uploaded an array!');
        imageCounter ++;
      });    
      }
    
  }
  render() {
    const style = {
      height: '80vh',
      display: 'flex',
      marginBottom: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    };
    const styleCount = {
      fontSize: '10px' ,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'

    }
    return (
      <div style={style} >
      מתעדים את שלטי המורשת
      <br/><br/>
      <br/>
        <button onClick={this.handleUpload}>OK</button>
        <br/>
        <div style={styleCount} className = "counter" >עד כה צולמו {imageCounter}  שלטים</div>
        <br/>

        <img src= {carmelLogo} height="60" alt="carmel 6000 logo"/>
      </div>
      
    )
  }
}

function uploadImagesToDb(imageUrl, gps){
  console.log("uploadImagesToDb");
  console.log("image Url is ");
  console.log(imageUrl);
  var imageInfos= {};
  // TO DO : ADD AUTH
  //imageInfos['userId'] = isUserSignedIn() ? firebase.auth().currentUser.uid : "no-uid";
  imageInfos['userId'] = "no-uid";
  imageInfos['gps'] = gps;
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
  console.log("dbKey is "+ dbKey);
  return dbKey;

}

 
export default ImageUpload;