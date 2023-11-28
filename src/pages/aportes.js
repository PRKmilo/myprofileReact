import React, { useRef } from 'react';
import { Carousel} from 'react-bootstrap'
 // Importa el archivo CSS de Bootstrap

 


export default function Aportes() {
  const carouselRef = useRef(null);

  const handleCarouselClick = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };
  return (
    <Carousel ref={carouselRef} onClick={handleCarouselClick}>
      <Carousel.Item>
        <a href='https://github.com/PRKmilo/testcontainers-ruby/tree/main/selenium'>
        <img
          className="d-block w-100"
          src="https://docs.localstack.cloud/user-guide/integrations/testcontainers/testcontainers-logo.svg"
          alt="Primera imagen"
        />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href='https://github.com/PRKmilo/testcontainers-ruby/tree/main/compose'>
        <img
          className="d-block w-100"
          src="https://miro.medium.com/v2/resize:fit:2000/1*yf-B-_TNbVOQco-N_-3CCg.png"
          alt="Segunda imagen"
        />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href='https://github.com/kishanrajput23/Coding-Buddies-Community-Contributions/pull/397/commits/c6cfe356a36c4b8542996db3b4e4aaee0a4d1df6'>
        <img
          className="d-block w-100"
          src="https://miro.medium.com/v2/resize:fit:1400/1*ukGXHFJKXmZiFOMyO-IRAQ.png"
          alt="Tercera imagen"
        />
        </a>
      </Carousel.Item>
    </Carousel>
  );
}