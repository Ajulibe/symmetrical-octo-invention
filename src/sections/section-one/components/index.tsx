import { useRef } from "react"
import { Greybackgroud } from "./style"
import { BsPlayFill } from "react-icons/bs"

export const CarouselSection = () => {
  const player = useRef<HTMLAudioElement>(null)

  const songArray = [
    "/audio/Ayra-babby.mp3",
    "/audio/Peruzzi.mp3",
    "/audio/Phyno.mp3",
  ]

  function getRandomArbitrary(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min)
  }

  const startSong = () => {
    const randomIndex = getRandomArbitrary(0, 3)

    if (player.current) {
      const audioTag = player.current
      const src = songArray[randomIndex]
      audioTag.src = src
      audioTag.play()
      console.log(audioTag)
    }
  }

  const stopSong = () => {
    if (player.current) {
      player.current.pause()
      player.current.currentTime = 0
    }
  }

  return (
    <Greybackgroud>
      <div className="carousel">
        <div className="carousel__bg-dark">
          <div className="carousel__animator">
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
          </div>

          <audio preload="false" ref={player}></audio>

          <div className="carousel__btn">
            <BsPlayFill
              className="icon"
              onMouseOver={startSong}
              onMouseLeave={stopSong}
            />
          </div>

          <div className="carousel__bg-circle"></div>

          {/* <div className="carousel__bg-second"></div> */}
        </div>
      </div>
    </Greybackgroud>
  )
}
