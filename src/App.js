import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Image from "./components/Image";
import images from "./images.json";
import './App.css';

class App extends Component {
  state = {
    images
  };

  render() {
    return (
      <Wrapper>
        {this.state.images.map(image => (
            <Image
              key={image.id}
              name={image.name}
              image={image.image}
            />
          ))}
      </Wrapper>
    );
  };
}

export default App;

