import React from 'react';

class Title extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <h1>TO DO ( {this.props.data.length} )</h1>
    )
  }
}

export default Title;