import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
//import { PicPage } from './Router';
import './Menu.css';


export class Menu extends Component {
    openNav() {
        console.log("Open Nav");
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginRight = "250px";
    }

    closeNav() {
        console.log("close Nav");
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginRight = "0";
    }
    render() {
        return (
            // <meta name="viewport" content="width=device-width, initial-scale=1">
            <div>
                <div id="mySidebar" className="sidebar">
                    <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>×</a>
                    <a href="#" onClick={() => { this.props.history.push('/camera') }}>הוספת שלט</a>
                    <a href="#" onClick={() => { this.props.history.push('/upload') }}>upload</a>
                    <a href="#">אודות</a>
                    <a href="#" onClick={() => { this.props.history.push('/gps') }}>מפה</a>
                </div>

                <div id="main">
                    <button className="openbtn" onClick={this.openNav}>☰ זכרון חי</button>
                </div>
                {/* <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={PicPage} />

                        <Route exact path="/camera"
                            render={(props) =>
                                <Camera {...props}
                                    finishTakingPicturesFunc={this.finishTakingPicturesFunc} />} />

                        <Route exact path="/upload"
                            render={(props) =>
                                <ImageUpload {...props}
                                    imageUrlArr={this.state.imageUrlArray} longitude={this.state.longitude} latitude={this.state.latitude} />} />

                        <Route exact path="/gps" render={(props) => <DisplayMapOnScreen {...props}
                            longitude={this.state.longitude} latitude={this.state.latitude} />} />


                    </Switch>
                </BrowserRouter> */}
                {/* <GPS updateLocation={this.updateLocation} /> */}
            </div>
        );

    }
}
