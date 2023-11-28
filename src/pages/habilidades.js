import React, {useRef} from 'react';
import { Carousel} from 'react-bootstrap'

 // Importa el archivo CSS de Bootstrap

export default function Habilidades() {
  const carouselRef = useRef(null);

  const handleCarouselClick = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };
  return (
    <Carousel ref={carouselRef} onClick={handleCarouselClick}>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://s36496.pcdn.co/wp-content/uploads/2019/01/7_Github_contenido.jpg"
        alt="Primera imagen"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://d32myzxfxyl12w.cloudfront.net/images/blog_images/be602627973000d99f6ba9a43aba117b82aa5e26.jpg?1649061518"
        alt="Segunda imagen"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.bairesdev.com/wp-content/uploads/2022/06/Picture6-1.svg"
        alt="Tercera imagen"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-75"
        src="https://spring.io/img/og-spring.png"
        alt="Tercera imagen"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-75"
        src="https://spring.io/img/og-spring.png"
        alt="Tercera imagen"
      />
    </Carousel.Item>
  </Carousel>
  );
}