import React, { useRef } from "react";
import { BsPlayFill } from "react-icons/bs";
import Lottie from "lottie-react";
import playerGif from "../lottie/rhythm.json";
import { AudioPlayer } from "../audioplayer/useAudio";
import { Wrapper } from "./style";

export const TestimonialCarousel = React.memo(() => {
  const player = useRef<HTMLAudioElement>(null);
  const { playTrack, stopTrack, isPlaying } = AudioPlayer();
  const checkBox = useRef<HTMLInputElement>(null);

  const LottieStyle = {
    height: 50,
    marginBottom: 5,
    BackgroundColor: "red"
  };

  const togglePlay = () => {
    const isChecked = checkBox.current?.checked;
    if (isChecked) {
      playTrack();
    } else {
      stopTrack();
    }
  };

  return (
    <Wrapper>
      <div className="carousel">
        <div className="carousel__bg-dark">
          <audio preload="false" ref={player}></audio>

          <div className="wrapper">
            <div className="carousel__btn">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
                className="checkbox"
                ref={checkBox}
                onChange={togglePlay}
              ></input>
              {isPlaying ? (
                <Lottie style={LottieStyle} className="icon" animationData={playerGif} />
              ) : (
                <BsPlayFill className="icon" />
              )}
            </div>
          </div>

          <div className="carousel__animator">
            <div className="carousel__bg-padding">
              <div>
                <div className="carousel__bg-message">
                  &#8220;We&#39;re loving it. Clothing did exactly what you said it does. Man, this
                  thing is getting better and better as I learn more about it.&#8221;
                </div>

                <div className="carousel__bg-message-info">
                  <span className="carousel__bg-name">Jena Redmond</span>
                  <p className="carousel__bg-role">Designer</p>
                </div>
              </div>
              <div>
                <div className="carousel__bg-message">
                  &#8220;We&#39;re loving it. Clothing did exactly what you said it does. Man, this
                  thing is getting better and better as I learn more about it.&#8221;
                </div>

                <div className="carousel__bg-message-info">
                  <span className="carousel__bg-name">Jena Redmond</span>
                  <p className="carousel__bg-role">Designer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel__bg-second"></div>
        </div>
      </div>
    </Wrapper>
  );
});

TestimonialCarousel.displayName = "Testimonial Carousel";
