import React, { Component } from 'react';

export class Canvas extends Component {

    static CANVAS_WIDTH = 160;
    static CANVAS_HEIGHT = 120;

    constructor(props) {
        super(props);
        this.state = ({
            id: 0,
            video :''
        });
        this.canvasRef = React.createRef();
        this.drawImageOnCanvas = this.drawImageOnCanvas.bind(this); 
        this.setVideo = this.setVideo.bind(this);
    }
    setVideo(){
        this.setState({video:this.props.video}, ()=>{
            console.log("the video is"+ this.state.video);
            this.drawImageOnCanvas();
        });
    }
    drawImageOnCanvas(){
        let ctx = this.canvasRef.current.getContext('2d');
        console.log("this.canvasRef.current" +this.canvasRef.current);
        console.log("ctx is" + ctx);
        ctx.drawImage(this.state.video, 0, 0, Canvas.CANVAS_WIDTH, Canvas.CANVAS_HEIGHT);
    }
    componentDidMount(){
        this.setVideo();
        console.log("the video is " + this.state.video)
        
    }
    render() {
        return (
            <div >
                <canvas width={Canvas.CANVAS_WIDTH} height={Canvas.CANVAS_HEIGHT}
                    key={this.props.snapShotsCounter + 1} ref={this.canvasRef} onClick={this.props.selectCanvas}>
                    Canvas Item
          </canvas>
                <button id="deleteCanvas" onClick={(e) => this.props.deleteCanvas(e) }>×</button>
            </div>
        )
    }
}
export default Canvas;
