import React, { Component } from 'react';

export class Canvas extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            id: 0,
            width: "160",
            height: "120"
        });
    }
    render() {
        var canvId = "canv" + this.state.id;
        return (
            <div>
                <canvas id={canvId} width={this.state.width} height={this.state.height}></canvas>
                <button id="deleteCanvas">DEL</button>
            </div>
        )

    }
}