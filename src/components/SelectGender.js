import React, { Component } from 'react';

export default class SelectGender extends Component {

  selectGender(event){
    this.props.selectGender(event.target.value);
  }

  render () {
    return (
      <select
        onChange={this.selectGender.bind(this)}>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
        </select>
    );
  }
}
