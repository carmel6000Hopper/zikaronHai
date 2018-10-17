import React, {Component} from 'react';

export class PicPage extends Component{
    render(){
        return(
            <div>
                <br/><br/>
                <button onClick={()=>{this.props.history.push('/camera')}}>camera</button><br/><br/>
                <button onClick={()=>{this.props.history.push('/gps')}}>to location</button><br/><br/>
                <button onClick={()=>{this.props.history.push('/upload')}}>upload images</button><br/><br/>
            </div>
        );
    }
}

export default PicPage;