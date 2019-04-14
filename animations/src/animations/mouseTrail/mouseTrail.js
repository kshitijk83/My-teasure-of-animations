import React from 'react';

/* Mouse trail adapted from a jQuery Codepen by Bryan C https://codepen.io/bryjch/pen/QEoXwA */

class Point {
constructor(x, y) {
    this.x = x;
    this.y = y;
    this.lifetime = 0;
}
}

class Canvas extends React.Component {
state = {
    cHeight: 0,
    cWidth: 0,
};

canvas = React.createRef();

componentDidMount = () => {
    // Set height and width on load because if set in state body isn't defined yet.
    this.setState({
    cHeight: document.body.clientHeight,
    cWidth: document.body.clientWidth,
    });

    window.addEventListener(
    'resize',
    () => {
        this.setState({
        cHeight: document.body.clientHeight,
        cWidth: document.body.clientWidth,
        });
    },
    false,
    );

    // If the device supports cursors, start animation.
    // if (matchMedia('(pointer:fine)').matches) {
    this.startAnimation();
    // }
}



render = () => {
    const { cHeight, cWidth } = this.state;
    return <canvas ref={this.canvas} width={cWidth} height={cHeight} />;
}
}

export default Canvas;