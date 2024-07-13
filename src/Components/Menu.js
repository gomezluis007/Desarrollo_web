import Container from 'react-bootstrap/esm/Container';
import '../Styles/App.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import enchiladas from "../resources/platillos/enchiladas.jpg"
import birria from "../resources/platillos/birria.jpg"
import Asado_de_boda from "../resources/platillos/Assado_de_boda.jpg"

const platillos = [
    {
        imagen: enchiladas,
        nombre: 'enchiladas',
        descripcion: 'Las enchiladas son tortillas rellenas de queso o pollo bañadas en chile rojo,verde,etc... '
    },
    {
        imagen: birria,
        nombre: 'Birria',
        descripcion: 'La biiria surge de la coccion de el cordero especiado a fuego lento para lograr una carne facil de desmenuzar'
    },{
        imagen: Asado_de_boda,
        nombre: 'Asado de boda',
        descripcion: 'LEl asado de bodas es un guiso de puerco tipico del estado de Zacatecas que combina diferentes chiles rojos para lograr un sabor unico'
    }
]

export const Menu = () => {
    return <div>
            <br></br>
            <Container>
            <div >
                <h1 className="text-center">Menú</h1>
            </div>
            </Container>
            <br></br>
            <Container>
                <Row xs={1} md={3} className="g-4">
                {Array.from({ length: platillos.length }).map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src={platillos[idx]['imagen']} />
                            <Card.Body>
                                <Card.Title>{platillos[idx]['nombre']}</Card.Title>
                                <Card.Text>
                                    {platillos[idx]['descripcion']}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                </Row>
                
            </Container>
        </div>
    
}