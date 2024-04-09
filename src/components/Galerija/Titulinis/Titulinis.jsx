import { Carousel } from 'react-bootstrap';
import Img from '../../../assets/img/321428278_726151968599493_3016709172147485044_n.jpg';
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
            src="../src/assets/img/322252237_5401922049911849_343718617657941608_n.jpg"
            alt="Second slide"
            style={{ width: '33%' }}
          />
          <img
            className="container"
            src="../src/assets/img/322878445_685586683234553_8194654702181948721_n.jpg"
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
            src="../src/assets/img/322297695_547332113961748_3551942094303599329_n.jpg"
            alt="First slide"
            style={{ width: '33%' }}
          />
          <img
            className="container"
            src="../src/assets/img/321207935_931781768170726_15131688440972736_n.jpg"
            alt="Second slide"
            style={{ width: '33%' }}
          />
          <img
            className="container"
            src="../src/assets/img/321580656_1315347745983668_4073054583856034283_n.jpg"
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
            src="../src/assets/img/IMG_20231117_095157.jpg"
            alt="First slide"
            style={{ width: '33%' }}
          />
          <img
            className="container"
            src="../src/assets/img/322129826_898660871566325_7115684282536262059_n.jpg"
            alt="Second slide"
            style={{ width: '33%' }}
          />
          <img
            className="container"
            src="../src/assets/img/IMG_20240227_145526.jpg"
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
