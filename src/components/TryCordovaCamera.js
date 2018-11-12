import React, { Component } from 'react';


export class TryCordovaCamera extends Component {

    static pictureSource;   // picture source
    static destinationType; // sets the format of returned value 

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        // Wait for Cordova to connect with the device
        //

        document.addEventListener("deviceready", this.onDeviceReady, false);
    }

    // Cordova is ready to be used!
    //
    onDeviceReady = () => {
        TryCordovaCamera.pictureSource = navigator.camera.PictureSourceType;
        TryCordovaCamera.destinationType = navigator.camera.DestinationType;
    }

    // Called when a photo is successfully retrieved
    //
    onPhotoDataSuccess = (imageData) => {
        // Uncomment to view the base64 encoded image data
        // console.log(imageData);

        // Get image handle
        //
        var smallImage = document.getElementById('smallImage');

        // Unhide image elements
        //
        smallImage.style.display = 'block';

        // Show the captured photo
        // The inline CSS rules are used to resize the image
        //
        smallImage.src = "data:image/jpeg;base64," + imageData;
    }

    // Called when a photo is successfully retrieved
    //
    onPhotoURISuccess = (imageURI) => {
        // Uncomment to view the image file URI 
        // console.log(imageURI);

        // Get image handle
        //
        var largeImage = document.getElementById('largeImage');

        // Unhide image elements
        //
        largeImage.style.display = 'block';

        // Show the captured photo
        // The inline CSS rules are used to resize the image
        //
        largeImage.src = imageURI;
    }

    // A button will call this function
    //
    capturePhoto = () => {
        console.log("capturePhoto");
        console.log("navigator: ", navigator);
        console.log("navigator.camera: ", navigator.camera);
        // Take picture using device camera and retrieve image as base64-encoded string
        navigator.camera.getPicture(this.onPhotoDataSuccess, this.onFail, {
            quality: 50,
            destinationType: TryCordovaCamera.destinationType.DATA_URL
        });
    }

    /*
    // A button will call this function
    //
    capturePhotoEdit = () => {
        console.log("capturePhotoEdit");
        // Take picture using device camera, allow edit, and retrieve image as base64-encoded string  
        navigator.camera.getPicture(this.onPhotoDataSuccess, this.onFail, {
            quality: 20, allowEdit: true,
            destinationType: TryCordovaCamera.destinationType.DATA_URL
        });
        */

    /*
    // A button will call this function
    //
    getPhoto = (source) => {
        // Retrieve image file location from specified source
        navigator.camera.getPicture(this.onPhotoURISuccess, this.onFail, {
            quality: 50,
            destinationType: TryCordovaCamera.destinationType.FILE_URI,
            sourceType: source
        });
    }*/

    // Called if something bad happens.
    // 
    onFail = (message) => {
        alert('Failed because: ' + message);
    }

    render() {
        return (
            <div>
                <button onClick={this.capturePhoto}>Capture Photo</button> <br />
                {/* <button onClick={this.capturePhotoEdit}>Capture Editable Photo</button> <br /> */}
                {/* <button onClick="getPhoto(pictureSource.PHOTOLIBRARY);">From Photo Library</button><br /> */}
                {/* <button onClick="getPhoto(pictureSource.SAVEDPHOTOALBUM);">From Photo Album</button><br /> */}

                <img style={{ display: "none", width: "60px", height: "60px" }}
                    id="smallImage"
                    src="" />
                <img style={{ display: "none" }} id="largeImage" src="" />
            </div>
        )
    }
}

export default TryCordovaCamera;
