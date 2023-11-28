import React,{useRef}from 'react';
import {Navbar, Nav,  NavLink} from 'react-bootstrap'
 // Importa el archivo CSS de Bootstrap

export default function Idiomas() {
  return (
    <div>
      <div>
     <label>English level C1</label>
     <img
        className="d-block w--2"
        src="https://media.istockphoto.com/id/479199262/es/foto/encuadre-completo-imagen-de-inglaterra-bandera.jpg?s=612x612&w=0&k=20&c=SwMP7VR64pbeG-fGCQSbP3e1jYLV0w-79bNyDG5z5Cc="
        alt="Primera imagen"
      />
     </div>
     <div>
     <label>Spanish level native</label>
     <img
        className="d-block w-10"
        src="https://img.freepik.com/vector-premium/bandera-espana-bandera-espana-ilustracion-vectorial_685751-103.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1700956800&semt=ais"
        alt="Primera imagen"
      />
     </div>
    </div>
  );
}