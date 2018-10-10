import React, {Component} from 'react';
import {storage, dBRefImages} from '../firebase';
import carmelLogo from '../images/carmel6000logo.jfif'
// WARNING - not thread safe
var imageCounter = 0 ;

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: '',
      progress: 0,
      gps_location : 0
    }
    this.handleChange = this
      .handleChange
      .bind(this);
      this.handleUpload = this.handleUpload.bind(this);
  }
  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
  }
  handleUpload = () => {
      const {image} = this.state;
      console.log(image);
      var key = uploadImagesToDb(image.name, this.state.gps_location);
      const uploadTask = storage.ref(`images/${key}`).put(image);
      imageCounter ++;
      uploadTask.on('state_changed', 
      (snapshot) => {
        // progrss function ....
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({progress});
      }, 
      (error) => {
           // error function ....
        console.log(error);
      }, 
    () => {
        // complete function ....
        storage.ref('images').child(key).getDownloadURL().then(url => {
            console.log(url);
            this.setState({url});
        })
    });
    
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
      <progress value={this.state.progress} max="100"/>
      <br/>
        <input type="file" onChange={this.handleChange}/>
        <button onClick={this.handleUpload}>Upload</button>
        <br/>
        <img src={this.state.url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400"/>
        <div style={styleCount} className = "counter" >עד כה צולמו {imageCounter}  שלטים</div>
        <br/>

        <img src= {carmelLogo} height="60" />
      </div>
      
    )
  }
}

function uploadImagesToDb(imageName, gps){
  var imageInfos= {};
  // TO DO : ADD AUTH
  //imageInfos['userId'] = isUserSignedIn() ? firebase.auth().currentUser.uid : "no-uid";
  imageInfos['userId'] = "no-uid";
  imageInfos['gps'] = gps;
  imageInfos['name'] = imageName;
  const uploadToDb = dBRefImages.push(
  imageInfos, function onComplete(err) {
    if (err) {
        alert("uploadImageInfosToDB: push failed with " + err);
    } else {
        console.log("uploadImageInfosToDB: done");
    }
  });
  var dbKey = uploadToDb.key;
  return dbKey;

}

 
export default ImageUpload;