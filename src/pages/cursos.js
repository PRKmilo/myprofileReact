import React,{useRef} from 'react';
import {Navbar, Nav,  NavLink,Carousel} from 'react-bootstrap'
 // Importa el archivo CSS de Bootstrap

export default function Cursos() {
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
        src="https://img-b.udemycdn.com/course/750x422/1235212_3204_4.jpg"
        alt="Primera imagen"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://img-c.udemycdn.com/course/750x422/882422_0549_11.jpg"
        alt="Segunda imagen"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://img-c.udemycdn.com/course/750x422/11305_58be_8.jpg"
        alt="Tercera imagen"
      />
    </Carousel.Item>
  </Carousel>
  )
}