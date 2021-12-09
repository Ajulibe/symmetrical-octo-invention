import { useRef, useState, useEffect } from "react";
import { Greybackgroud } from "./style";
import { BsPlayFill } from "react-icons/bs";
import Lottie from "lottie-react";
import playerGif from "./lottie/rhythm.json";
import loaderGif from "./lottie/loader.json";
import Image from "next/image";
import useSound from "use-sound";

export const CarouselSection = () => {
  const player = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [startAnim, setStartAnim] = useState(false);
  const index = useRef(0);
  const playPromise = useRef<Promise<void>>();
  // const [audio] = useState(new Audio("/audio/Ayra-babby.mp3"));
  const songArray = ["/audio/Ayra-babby.mp3", "/audio/Peruzzi.mp3", "/audio/Phyno.mp3"];
  function getRandomArbitrary(min: number, max: number) {
    const randomIndex = Math.floor(Math.random() * (max - min) + min);
    return songArray[randomIndex];
  }

  const [play, { stop }] = useSound(getRandomArbitrary(0, 3), { volume: 1 });

  useEffect(() => {
    isPlaying ? play() : stop();
  }, [isPlaying]);

  const CarouselContent = [
    {
      image: "/section-one/1.webp",
      details: ""
    },
    {
      image: "/section-one/2.jpg",
      details: ""
    },
    {
      image: "/section-one/3.jpg",
      details: ""
    },
    {
      image: "/section-one/4.jpg",
      details: ""
    },
    {
      image: "/section-one/5.jpg",
      details: ""
    },
    {
      image: "/section-one/6.jpg",
      details: ""
    }
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index.current === CarouselContent.length - 1) {
        index.current = 0;
      } else {
        index.current = index.current + 1;
      }
      setImageIndex(index.current);
    }, 7000);
    return () => clearInterval(intervalId);
  }, [CarouselContent.length]);

  useEffect(() => {
    setStartAnim(true);
    setTimeout(() => {
      setStartAnim(false);
    }, 2500);
  }, [imageIndex]);

  const startSong = () => {
    setIsPlaying(true);

    // const randomIndex = getRandomArbitrary(0, 3);

    // console.log(randomIndex, "randomIndex");

    // if (player.current) {
    //   const audioTag = player.current;
    //   // const src = songArray[randomIndex];
    //   audioTag.src = src;
    //   if (playPromise.current) {
    //     playPromise.current = audioTag.play();
    //   }
    //   // setIsPlaying(true);
    // }
  };

  const stopSong = () => {
    setIsPlaying(false);

    // if (playPromise.current !== undefined) {
    //   playPromise.current
    //     .then(() => {
    //       if (player.current) {
    //         player.current.pause();
    //         player.current.currentTime = 0;
    //         // setIsPlaying(false);
    //       }
    //     })
    //     .catch(() => {
    //       // setIsPlaying(false);
    //     });
    // }
  };

  const LottieStyle = {
    height: 50,
    marginBottom: 5,
    BackgroundColor: "red"
  };

  const LoaderStyle = {
    width: 100,
    flexGrow: 1
  };

  const previousImage = imageIndex === 0 ? CarouselContent.length - 1 : imageIndex - 1;

  return (
    <Greybackgroud startAnim={startAnim}>
      <div className="bg">
        <div className="bg__previous">
          <Image
            src={CarouselContent[previousImage].image}
            alt="fullimage"
            width="1700"
            height="2000"
            objectFit="cover"
            priority
          />
        </div>
        <div className="bg__next">
          <Image
            src={CarouselContent[imageIndex].image}
            alt="fullimage"
            width="1700"
            height="2000"
            objectFit="cover"
            priority
          />
        </div>
      </div>

      <div className="carousel">
        <div className="carousel__bg-dark">
          <audio preload="false" ref={player}></audio>

          <div className="wrapper">
            <div className="carousel__btn" onMouseOver={startSong} onMouseLeave={stopSong}>
              {isPlaying ? (
                <Lottie style={LottieStyle} className="icon" animationData={playerGif} />
              ) : (
                <BsPlayFill className="icon" />
              )}
            </div>

            <Lottie style={LoaderStyle} className="loader" animationData={loaderGif} />
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

          {/* <div className="carousel__bg-circle"></div> */}

          <div className="carousel__bg-second"></div>
        </div>
      </div>
    </Greybackgroud>
  );
};
