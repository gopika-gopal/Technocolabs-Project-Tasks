import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button.js';

class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: [100, 200, 250] };
    handleClick();
  }
  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }

  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a,b) => a+b) < 127 * 3;
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random()*256));
    }
    return random;
  }
  handleClick(){
    var obj = new Object({ color: this.chooseColor() });
    this.setState(obj)
  }

  render() {
    return (
      <div>
        <h1 className={this.isLight() ? 'Your color is ' + formatColor(this.state.color) : 'Your color is ' + formatColor(this.state.color) }>

        </h1>
        <Button light={this.isLight()} onClick="handleClick()"/>
      </div>
    );
  }
}

ReactDOM.render(
  <Random />, 
  document.getElementById('app')
);