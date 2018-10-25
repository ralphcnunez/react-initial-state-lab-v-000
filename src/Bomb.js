import React, { Component } from 'react';

 export default class Bomb extends React.Component {
   // we use the constructor to set the INITIAL STATE
  constructor(props) {
    super(props)
    console.log(props.initialCount)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }
   render() {
    const comment = () => {
      if(this.state.secondsLeft === 0){
        return `Boom!`
      } else {
        return `${this.state.secondsLeft} seconds left before I go boom!`
      }
    }
    return (
      <div>
        {comment()}
      </div>
    )
  }
}
