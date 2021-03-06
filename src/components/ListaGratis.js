import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import PropTypes from 'prop-types'
import Button from './Button'


const ListaGratis = ({ onShow }) => {
    var discord = require('../images/discord.jpg')
    var googlemeet = require('../images/googlemeet.jpg')
    var googledrive = require('../images/googledrive.jpg')
    var libreoffice = require('../images/libreoffice.jpg')
    var dropbox = require('../images/dropbox.jpg')
    return (
        <div>
            <Tab.Container id="ListaGratis" defaultActiveKey="first">
                <Row>
                    <Col sm={2}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Discord</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Google Meet</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Google Drive</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth">Libre Office</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fifth">Dropbox</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <img className="foto" src={discord.default} /><br/>
                                O Discord pode ser utilizado no Windows, MacOS, Android, iOS, Linux, Xbox One, Xbox Series ou em um navegador web, que suportam recursos fundamentais de texto baseados em bate-papo. O aplicativo Discord para computadores pessoais foi projetado para uso durante jogos, incluindo recursos como baixa lat??ncia, servidores de bate-papo de voz gratuitos para usu??rios e uma infraestrutura de servidor dedicada. Na vers??o atual j?? h?? suporte a chamadas de v??deo e compartilhamento de tela.<br/>
                                <Button color='green' text='Clique aqui para ir para a p??gina da ferramenta' onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href='https://discord.com';}}/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <img className="foto" src={googlemeet.default} /><br/>
                                Google Meet ?? um servi??o de comunica????o por v??deo desenvolvido pelo Google. Mantenha sua equipe conectada por videoconfer??ncia empresarial, um recurso criado com a seguran??a e efici??ncia da infraestrutura global do Google. O Meet est?? inclu??do no Google Workspace e no Google Workspace for Education. Para usu??rios gratuitos, as sess??es s??o limitadas a 60 minutos.<br/>
                                <Button color='green' text='Clique aqui para ir para a p??gina da ferramenta' onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href='https://apps.google.com/meet/';}}/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <img className="foto" src={googledrive.default} /><br/>
                                Google Drive ?? um servi??o de armazenamento e sincroniza????o de arquivos desenvolvido pela Google. Google Drive abriga agora o Google Docs, um leque de aplica????es de produtividade, que oferece a edi????o de documentos, folhas de c??lculo, apresenta????es, e muito mais. O servi??o ?? gr??tis mas caso queira mais armazenamento ?? necess??rio comprar.<br/>
                                <Button color='green' text='Clique aqui para ir para a p??gina da ferramenta' onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href='https://www.google.com/intl/pt/drive/';}}/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <img className="foto" src={libreoffice.default} /><br/>
                                LibreOffice ?? uma su??te de aplicativos livres e de c??digo aberto para escrit??rio dispon??vel para Windows, Unix, Solaris, Linux e Mac OS X.<br/>
                                <Button color='green' text='Clique aqui para ir para a p??gina da ferramenta' onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href='https://pt-br.libreoffice.org';}}/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth">
                                <img className="foto" src={dropbox.default} /><br/>
                                Dropbox ?? um servi??o para armazenamento e partilha de arquivos. ?? baseado no conceito de "computa????o em nuvem". Ele pertence ao Dropbox Inc., sediada em San Francisco, Calif??rnia, EUA. A empresa desenvolvedora do programa disponibiliza centrais de computadores que armazenam os arquivos de seus clientes. O servi??o ?? gr??tis mas caso queira mais armazenamento ?? necess??rio comprar.<br/>
                                <Button color='green' text='Clique aqui para ir para a p??gina da ferramenta' onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href='https://www.dropbox.com/?landing=dbv2';}}/>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}

export default ListaGratis