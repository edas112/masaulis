import './galerija.scss';
import { Carousel } from 'react-bootstrap';

function Galerija() {
  return (
    <div>
      <Carousel className="container galerija">
        <Carousel.Item>
          <img
            className="container"
            src="../src/assets/img/321428278_726151968599493_3016709172147485044_n.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="container"
            src="../src/assets/img/322252237_5401922049911849_343718617657941608_n.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="container"
            src="../src/assets/img/322878445_685586683234553_8194654702181948721_n.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Galerija;
