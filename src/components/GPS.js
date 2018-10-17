import { Component } from 'react';

export class GPS extends Component {
    constructor() {
        super();
        this.onSuccessLocation = this.onSuccessLocation.bind(this);
        this.onErrorLocation = this.onErrorLocation.bind(this);

    }
    // onSuccess Geolocation
    onSuccessLocation(position) {
        this.props.updateLocation(position.coords.latitude, position.coords.longitude);

    }
    // onError Callback receives a PositionError object
    onErrorLocation(error) {
        alert('code: ' + error.code + '\n' +
            'message: ' + error.message + '\n');
    }
    render() {
        navigator.geolocation.getCurrentPosition(this.onSuccessLocation, this.onErrorLocation);
        return null;
    }

}