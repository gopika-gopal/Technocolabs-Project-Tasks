import React from 'react';

export class Menu extends React.Component {
  render() {
    return (
      <form handleClick={handleClick(e)}  onClick={chooseVideo}>
        <input type="radio" name="src" value="fast" /> fast
        <input type="radio" name="src" value="slow" /> slow
        <input type="radio" name="src" value="cute" /> cute
        <input type="radio" name="src" value="eek" /> eek
      </form>
    );
  }
  handleClick(e){
    let text = e.target.value;
    chooseVideo(text);
  }
}