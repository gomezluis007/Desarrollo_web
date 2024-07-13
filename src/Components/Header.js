import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import inv_logo from '../resources/Inventario_logo.png';
import '../Styles/App.css';
import '../Styles/Header.css'
import Figure from 'react-bootstrap/Figure';

function ColorSchemesExample() {
  return (
    <div class='diagonal-gradient'>
      <Navbar>
        <Container >
          <Navbar.Brand href="/">
            <Figure >
                <Figure.Image
                    width={115}
                    height={105}
                    alt="171x180"
                    src={inv_logo}
                    class="rounded-circle"
                />
              </Figure>
          </Navbar.Brand>
          <Nav className="me-auto">
              <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link href="/menu/">Menú</Nav.Link>
              <Nav.Link href="/proveedores/">Proveedores</Nav.Link>
              <Nav.Link href="/envios/">Envios</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default ColorSchemesExample;



export function Header () {
    return(
        <ColorSchemesExample/>
        
    ) 
    
};
