import Container from 'react-bootstrap/esm/Container';
import '../Styles/App.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo_prueba from "../resources/PEPSICO_logo.png"

const socios = [
    {
        nombre:"Fruteria siembre fresco",
        imagen:logo_prueba
    },
    {
        nombre:"PEPSICO",
        imagen:logo_prueba
    },
    {
        nombre:"Mezcaleria el gran coronel",
        imagen:logo_prueba
    },
]

export function Proveedores (){
    return(
        <div>
            <br></br>
            <Container>
                <div >
                    <h1 className="text-center">Socios</h1>
                </div>
            </Container>
            <br></br>
            <Container>
                <Row xs={1} md={3} className="g-4">
                {Array.from({ length: socios.length }).map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            <a href='https://www.pepsico.com.mx' ><Card.Img variant="top" src = {socios[idx]['imagen']} /></a>
                        </Card>
                    </Col>
                ))}
                </Row>
                
            </Container>
        </div>
    );
}