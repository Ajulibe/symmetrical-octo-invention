import { useRef, useState, useEffect } from "react"
import { Greybackgroud } from "./style"
import { BsPlayFill } from "react-icons/bs"
import Lottie from "lottie-react"
import playerGif from "./lottie/rhythm.json"
import Image from "next/image"

export const CarouselSection = () => {
  const player = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [loop, setLoop] = useState<boolean>(false)
  const [loopWatcher, setLoopWatcher] = useState<boolean>(false)
  const bgTrigger = useRef<HTMLInputElement>(null)

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
      setLoop((prev) => !prev)
    }, 7000)

    return () => clearInterval(intervalId)
  }, [])

  const startSong = () => {
    const randomIndex = getRandomArbitrary(0, 3)

    if (player.current) {
      const audioTag = player.current
      const src = songArray[randomIndex]
      audioTag.src = src
      audioTag.play()
      console.log(audioTag)
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

  const CarouselContent = [
    {
      image:
        "https://res.cloudinary.com/ajulibe/image/upload/v1630596893/ROMI/alesia-kazantceva-dhD_FiNkuzw-unsplash_d0gswj.jpg",
      details: "",
    },
    {
      image:
        "https://res.cloudinary.com/ajulibe/image/upload/v1630596884/ROMI/disruptivo-DokE5D4GbDk-unsplash_pich0l.jpg",
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

  return (
    <Greybackgroud loop={loop}>
      <div className="carousel">
        <div className="carousel__bg-dark">
          {/* <div className="carousel__animator">
            <div>
              <div className="carousel__bg-message">
                &#8220;We&#39;re loving it. Clothing did exactly what you said
                it does. Man, this thing is getting better and better as I learn
                more about it.&#8221;
              </div>

              <div className="carousel__bg-message-info">
                <span className="carousel__bg-name">Jena Redmond</span>
                <p className="carousel__bg-role">Designer</p>
              </div>
            </div>

            <div>
              <div className="carousel__bg-message">
                &#8220;We&#39;re loving it. Clothing did exactly what you said
                it does. Man, this thing is getting better and better as I learn
                more about it.&#8221;
              </div>

              <div className="carousel__bg-message-info">
                <span className="carousel__bg-name">Jena Redmond</span>
                <p className="carousel__bg-role">Designer</p>
              </div>
            </div>
          </div> */}

          <audio preload="false" ref={player}></audio>

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

          <div className="carousel__animator">
            {loop ? (
              <div className="carousel__bg-padding">
                <div>
                  <div className="carousel__bg-message">
                    &#8220;We&#39;re loving it. Clothing did exactly what you
                    said it does. Man, this thing is getting better and better
                    as I learn more about it.&#8221;
                  </div>

                  <div className="carousel__bg-message-info">
                    <span className="carousel__bg-name">Jena Redmond</span>
                    <p className="carousel__bg-role">Designer</p>
                  </div>
                </div>
                <div>
                  <div className="carousel__bg-message">
                    &#8220;We&#39;re loving it. Clothing did exactly what you
                    said it does. Man, this thing is getting better and better
                    as I learn more about it.&#8221;
                  </div>

                  <div className="carousel__bg-message-info">
                    <span className="carousel__bg-name">Jena Redmond</span>
                    <p className="carousel__bg-role">Designer</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="carousel__bg-dark__image">
                <Image
                  src={CarouselContent[1].image}
                  alt="fullimage"
                  width="700"
                  height="530"
                  objectFit="cover"
                />
              </div>
            )}
          </div>

          {/* <div className="carousel__bg-circle"></div> */}

          <span className="carousel__div">Aka</span>

          <div className="carousel__bg-second">
            <div className="carousel__bg-second_in">
              <Image
                src={CarouselContent[1].image}
                alt="fullimage"
                width="500"
                height="500"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Greybackgroud>
  )
}
