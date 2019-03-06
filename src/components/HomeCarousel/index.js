import React, { Component } from 'react';

// import { Container } from './styles';
import Carousel from 'nuka-carousel';

const colors = ["7732bb", "047cc0", "00884b", "e3bc13", "db7c00", "aa231f"];

export default class HomeCarousel extends Component {
  state = {
    length : 6
  }

  render() {
    return (
      <Carousel
            slidesToShow={1.0}
            wrapAround={true}
            autoplay={true}
            autoplayInterval={5000}
          >
            {colors.slice(0, this.state.length).map((color, index) => (
              <img
                src={`http://placehold.it/1000x400/${color}/ffffff/&text=slide${index +
                  1}`}
                alt={`Slide ${index + 1}`}
                key={color}
                onClick={this.handleImageClick}
                style={{
                  height:
                    this.state.heightMode === "current" ? 100 * (index + 1) : 400
                }}
              />
            ))}
          </Carousel>
    );
  }
}
