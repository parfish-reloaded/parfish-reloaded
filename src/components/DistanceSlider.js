import React from 'react';
import styled from '@emotion/styled';

const SliderContainer = styled.div`
  width: 250px;
  border: none;
  border-radius: 0.5em;
  padding: 15px 22px;
  margin: 10px 5px;
  box-sizing: border-box;
  background-color: #941e00;
  color: #f0f0f0;
  .value {
    text-align: center;
    font-size: 11px;
  }

  /* Styling the thumb */
  input[type='range'] {
    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
    width: 100%; /* Specific width is required for Firefox. */
    background: transparent; /* Otherwise white in Chrome */
  }

  input[type='range']:focus {
    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
  }

  input[type='range']::-ms-track {
    width: 100%;
    cursor: pointer;
    /* Hides the slider so custom styles can be added */
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 1px solid grey;
    border-radius: 50%;
    height: 15px;
    width: 15px;
    background: whitesmoke;
    cursor: pointer;
    margin-top: -5px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; /* Add cool effects to your sliders! */
  }
  input[type='range']::-moz-range-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: whitesmoke;
    cursor: pointer;
  }

  /* Styling the track */
  input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    background: #ff5c07;
  }

  input[type='range']:focus::-webkit-slider-runnable-track {
    background: #367ebd;
  }

  input[type='range']::-moz-range-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    background: #ff5c07;
  }

  input[type='range']::-ms-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    background: transparent;
    color: transparent;
  }
  input[type='range']::-ms-fill-lower {
    background: #ff5c07;
  }
  input[type='range']:focus::-ms-fill-lower {
    background: #ff5c07;
  }
  input[type='range']::-ms-fill-upper {
    background: #ff5c07;
  }
  input[type='range']:focus::-ms-fill-upper {
    background: #ff5c07;
  }
`;

const SliderDescription = styled.p`
  font-size: 11px;
  margin: 0px auto;
`;

export default class DistanceSlider extends React.Component {
  state = {
    value: 120
  };
  handleOnChange = event => this.setState({ value: event.target.value });

  render() {
    return (
      <SliderContainer>
        <SliderDescription>
          Deine max. Angellänge: {this.state.value} km
        </SliderDescription>
        <input
          type="range"
          min={0}
          max={200}
          value={this.state.value}
          className="slider"
          onChange={this.handleOnChange}
        />
      </SliderContainer>
    );
  }
}
