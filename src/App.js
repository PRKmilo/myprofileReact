import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import Navigation from './layaouts/Navbar';
import { Container } from 'react-bootstrap';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Cursos from './pages/cursos';
import Aportes from './pages/aportes';
import Habilidades from './pages/habilidades';
import Idiomas from './pages/idiomas';

function App() {
  return (
    <Router>
      <div>
      <Navigation></Navigation>
      </div>

      <Container>
        <Routes>
        <Route exact path='/cursos' element={<Cursos/>}></Route>
        <Route exact path='/aportes' element={<Aportes/>}></Route>
        <Route exact path='/habilidades' element={<Habilidades/>}></Route>
        <Route exact path='/idiomas' element={<Idiomas/>}></Route>
        </Routes>
      </Container>
      </Router>
  );
}

export default App;
