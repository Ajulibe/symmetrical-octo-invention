import { Greybackgroud } from "./style"
import { BsPlayFill } from "react-icons/bs"

export const CarouselSection = () => {
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

          <div className="carousel__btn">
            <BsPlayFill className="icon" />
          </div>

          <div className="carousel__bg-circle"></div>

          {/* <div className="carousel__bg-second"></div> */}
        </div>
      </div>
    </Greybackgroud>
  )
}
