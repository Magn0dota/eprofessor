import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types'
import Button from './Button'
import zoom from '../images/zoom.jpg'

const ListaPago = ({ onShow }) => {    
    var zoom = require('../images/zoom.jpg')
    return (
        <div>
            <Tab.Container id="ListaPago" defaultActiveKey="first">
                <Row>
                    <Col sm={2}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Zoom</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Microsoft Office</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <img className="foto" src={zoom.default} /><br/>
                                O Zoom fornece videoconferência até 100 participantes, com um limite de tempo de 40 minutos. Para além estão disponíveis assinaturas pagas para permitir um maior número de participantes, aumentar o limite de tempo e obter recursos mais avançados. <br/>
                                <Button color='green' text='Clique aqui para ir para a página da ferramenta' onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href='https://zoom.us/download';}}/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                O Microsoft Office, ou simplesmente Office, é um pacote de aplicativos para escritório e serviços, desenvolvido pela Microsoft. Contém programas como processador de texto, planilha de cálculo, banco de dados, apresentação gráfica, cliente de e-mails, entre outros. Desde o Office 2013, a Microsoft promove o Office 365 como o principal meio de obtenção do Microsoft Office: ele permite o uso do software e outros serviços em um modelo de negócios por assinatura, e os usuários recebem atualizações de recursos do software durante a vida útil da assinatura.{"\n"}
                                <Button color='green' text='Clique aqui para ir para a página da ferramenta' onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href='https://www.office.com/?auth=1';}}/>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}

export default ListaPago