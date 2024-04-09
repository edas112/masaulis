import { Carousel } from 'react-bootstrap';
import Img from '../../../assets/img/321428278_726151968599493_3016709172147485044_n.jpg';
import Img2 from '../../../assets/img/322252237_5401922049911849_343718617657941608_n.jpg';
import Img3 from '../../../assets/img/322878445_685586683234553_8194654702181948721_n.jpg';
import Img4 from '../../../assets/img/322297695_547332113961748_3551942094303599329_n.jpg';
import Img5 from '../../../assets/img/322878445_685586683234553_8194654702181948721_n.jpg';
import Img6 from '../../../assets/img/322297695_547332113961748_3551942094303599329_n.jpg';
import Img7 from '../../../assets/img/322252237_5401922049911849_343718617657941608_n.jpg';
import Img8 from '../../../assets/img/322297695_547332113961748_3551942094303599329_n.jpg';
import Img9 from '../../../assets/img/322252237_5401922049911849_343718617657941608_n.jpg';

function Titulinis() {
  return (
    <div>
      <Carousel className="container galerija">
        <Carousel.Item>
          <img
            className="container"
            src={Img}
            alt="First slide"
            style={{ width: '33%' }}
          />
          <img
            className="container"
            src={Img2}
            alt="Second slide"
            style={{ width: '33%' }}
          />
          <img
            className="container"
            src={Img3}
            alt="Third slide"
            style={{ width: '33%' }}
          />
          <Carousel.Caption>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="container"
            src={Img4}
            alt="First slide"
            style={{ width: '33%' }}
          />
          <img
            className="container"
            src={Img5}
            alt="Second slide"
            style={{ width: '33%' }}
          />
          <img
            className="container"
            src={Img6}
            alt="Third slide"
            style={{ width: '33%' }}
          />
          <Carousel.Caption>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="container"
            src={Img7}
            alt="First slide"
            style={{ width: '33%' }}
          />
          <img
            className="container"
            src={Img8}
            alt="Second slide"
            style={{ width: '33%' }}
          />
          <img
            className="container"
            src={Img9}
            alt="Third slide"
            style={{ width: '33%' }}
          />
          <Carousel.Caption>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Titulinis;
