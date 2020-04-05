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
`;

const SlideInput = styled.input`
  /* Styling the thumb */

  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */

  :focus {
    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
  }

  ::-ms-track {
    width: 100%;
    cursor: pointer;
    /* Hides the slider so custom styles can be added */
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  ::-webkit-slider-thumb {
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
  ::-moz-range-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: whitesmoke;
    cursor: pointer;
  }

  /* Styling the track */
  ::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    background: #ff5c07;
  }

  :focus::-webkit-slider-runnable-track {
    background: #ff5c07;
  }

  ::-moz-range-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    background: #ff5c07;
  }

  ::-ms-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    background: transparent;
    color: transparent;
  }
  ::-ms-fill-lower {
    background: #ff5c07;
  }
  :focus::-ms-fill-lower {
    background: #ff5c07;
  }
  ::-ms-fill-upper {
    background: #ff5c07;
  }
  :focus::-ms-fill-upper {
    background: #ff5c07;
  }
`;

const SliderDescription = styled.p`
  font-size: 11px;
  margin: 0px auto;
`;

function DistanceSlider(props) {
  return (
    <SliderContainer>
      <SliderDescription>
        Deine max. Angellänge: {props.value} km
      </SliderDescription>
      <SlideInput type="range" min={0} max={200} {...props} />
    </SliderContainer>
  );
}
export default DistanceSlider;
