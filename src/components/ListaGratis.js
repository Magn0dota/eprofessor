import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import PropTypes from 'prop-types'
import Button from './Button'
import discord from '../images/discord.jpg'


const ListaGratis = ({ onShow }) => {
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
                                O Discord pode ser utilizado no Windows, MacOS, Android, iOS, Linux, Xbox One, Xbox Series ou em um navegador web, que suportam recursos fundamentais de texto baseados em bate-papo. O aplicativo Discord para computadores pessoais foi projetado para uso durante jogos, incluindo recursos como baixa latência, servidores de bate-papo de voz gratuitos para usuários e uma infraestrutura de servidor dedicada. Na versão atual já há suporte a chamadas de vídeo e compartilhamento de tela.<br/>
                                <Button color='green' text='Clique aqui para ir para a página da ferramenta' onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href='https://discord.com';}}/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                Google Meet é um serviço de comunicação por vídeo desenvolvido pelo Google. Mantenha sua equipe conectada por videoconferência empresarial, um recurso criado com a segurança e eficiência da infraestrutura global do Google. O Meet está incluído no Google Workspace e no Google Workspace for Education. Para usuários gratuitos, as sessões são limitadas a 60 minutos.<br/>
                                <Button color='green' text='Clique aqui para ir para a página da ferramenta' onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href='https://apps.google.com/meet/';}}/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                Google Drive é um serviço de armazenamento e sincronização de arquivos desenvolvido pela Google. Google Drive abriga agora o Google Docs, um leque de aplicações de produtividade, que oferece a edição de documentos, folhas de cálculo, apresentações, e muito mais. O serviço é grátis mas caso queira mais armazenamento é necessário comprar.<br/>
                                <Button color='green' text='Clique aqui para ir para a página da ferramenta' onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href='https://www.google.com/intl/pt/drive/';}}/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                LibreOffice é uma suíte de aplicativos livres e de código aberto para escritório disponível para Windows, Unix, Solaris, Linux e Mac OS X.<br/>
                                <Button color='green' text='Clique aqui para ir para a página da ferramenta' onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href='https://pt-br.libreoffice.org';}}/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth">
                                Dropbox é um serviço para armazenamento e partilha de arquivos. É baseado no conceito de "computação em nuvem". Ele pertence ao Dropbox Inc., sediada em San Francisco, Califórnia, EUA. A empresa desenvolvedora do programa disponibiliza centrais de computadores que armazenam os arquivos de seus clientes. O serviço é grátis mas caso queira mais armazenamento é necessário comprar.<br/>
                                <Button color='green' text='Clique aqui para ir para a página da ferramenta' onClick={(e) => {
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