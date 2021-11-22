import { useRef, useState, useEffect } from "react"
import { Greybackgroud } from "./style"
import { BsPlayFill } from "react-icons/bs"
import Lottie from "lottie-react"
import playerGif from "./lottie/rhythm.json"
import loaderGif from "./lottie/loader.json"
import Image from "next/image"

export const CarouselSection = () => {
  const player = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [imageIndex, setImageIndex] = useState<number>(0)
  const [startAnim, setStartAnim] = useState(false)
  const index = useRef(0)

  const songArray = [
    "/audio/Ayra-babby.mp3",
    "/audio/Peruzzi.mp3",
    "/audio/Phyno.mp3",
  ]

  function getRandomArbitrary(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min)
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index.current === CarouselContent.length - 1) {
        index.current = 0
      } else {
        index.current = index.current + 1
      }
      setImageIndex(index.current)
    }, 7000)
    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    setStartAnim(true)
    setTimeout(() => {
      setStartAnim(false)
    }, 2500)
  }, [imageIndex])

  const startSong = () => {
    const randomIndex = getRandomArbitrary(0, 3)

    if (player.current) {
      const audioTag = player.current
      const src = songArray[randomIndex]
      audioTag.src = src
      audioTag.play()
      setIsPlaying(true)
    }
  }

  const stopSong = () => {
    if (player.current) {
      player.current.pause()
      player.current.currentTime = 0
      setIsPlaying(false)
    }
  }

  const LottieStyle = {
    height: 50,
    marginBottom: 5,
    BackgroundColor: "red",
  }

  const LoaderStyle = {
    width: 100,
    flexGrow: 1,
  }

  const CarouselContent = [
    {
      image:
        "https://res.cloudinary.com/ajulibe/image/upload/v1630596893/ROMI/alesia-kazantceva-dhD_FiNkuzw-unsplash_d0gswj.jpg",
      details: "",
    },
    {
      image:
        "https://res.cloudinary.com/ajulibe/image/upload/v1637483555/fashion-site/ladyred_rr7a0l.webp",
      details: "",
    },
    {
      image:
        "https://res.cloudinary.com/ajulibe/image/upload/v1630596866/ROMI/joanna-nix-walkup-GfqwtN5heR8-unsplash_fs3w9w.jpg",
      details: "",
    },
    {
      image:
        "https://res.cloudinary.com/ajulibe/image/upload/v1630648144/ROMI/felicia-buitenwerf-5yn5rGI5IUw-unsplash_b1xrma.jpg",
      details: "",
    },
  ]

  const previousImage =
    imageIndex === 0 ? CarouselContent.length - 1 : imageIndex - 1

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
          />
        </div>
        <div className="bg__next">
          <Image
            src={CarouselContent[imageIndex].image}
            alt="fullimage"
            width="1700"
            height="2000"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="carousel">
        <div className="carousel__bg-dark">
          <audio preload="false" ref={player}></audio>

          <div className="wrapper">
            <div
              className="carousel__btn"
              // onMouseOver={startSong}
              // onMouseLeave={stopSong}
            >
              {isPlaying ? (
                <Lottie
                  style={LottieStyle}
                  className="icon"
                  animationData={playerGif}
                />
              ) : (
                <BsPlayFill className="icon" />
              )}
            </div>

            <Lottie
              style={LoaderStyle}
              className="loader"
              animationData={loaderGif}
            />
          </div>

          <div className="carousel__animator">
            <div className="carousel__bg-padding">
              <div>
                <div className="carousel__bg-message">
                  &#8220;We&#39;re loving it. Clothing did exactly what you said
                  it does. Man, this thing is getting better and better as I
                  learn more about it.&#8221;
                </div>

                <div className="carousel__bg-message-info">
                  <span className="carousel__bg-name">Jena Redmond</span>
                  <p className="carousel__bg-role">Designer</p>
                </div>
              </div>
              <div>
                <div className="carousel__bg-message">
                  &#8220;We&#39;re loving it. Clothing did exactly what you said
                  it does. Man, this thing is getting better and better as I
                  learn more about it.&#8221;
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
  )
}
