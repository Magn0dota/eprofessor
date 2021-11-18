import ListGroup from 'react-bootstrap/ListGroup'
import Tabs from 'react-bootstrap/Tabs'
import TabContainer from 'react-bootstrap/TabContainer'
import Tab from 'react-bootstrap/Tab'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types'

const Listas = [
    {
        id: 1,
        name: 'Zoom Meetings',
        description: "O Zoom fornece videoconferência até 100 participantes, com um limite de tempo de 40 minutos. Para além estão disponíveis assinaturas pagas para permitir um maior número de participantes, aumentar o limite de tempo e obter recursos mais avançados",
        gratis: false,
    },
    {
        id: 2,
        name: 'Discord',
        description: 'O Discord pode ser utilizado no Windows, MacOS, Android, iOS, Linux, Xbox One, Xbox Series ou em um navegador web, que suportam recursos fundamentais de texto baseados em bate-papo. O aplicativo Discord para computadores pessoais foi projetado para uso durante jogos, incluindo recursos como baixa latência, servidores de bate-papo de voz gratuitos para usuários e uma infraestrutura de servidor dedicada. Na versão atual já há suporte a chamadas de vídeo e compartilhamento de tela.',
        gratis: true,
    },
    {
        id: 3,
        name: 'Google Meet',
        description: "Google Meet é um serviço de comunicação por vídeo desenvolvido pelo Google. Mantenha sua equipe conectada por videoconferência empresarial, um recurso criado com a segurança e eficiência da infraestrutura global do Google. O Meet está incluído no Google Workspace e no Google Workspace for Education. Para usuários gratuitos, as sessões são limitadas a 60 minutos",
        gratis: true,
    },
    {
        id: 4,
        name: 'Google Drive',
        description: "Google Drive é um serviço de armazenamento e sincronização de arquivos desenvolvido pela Google. Google Drive abriga agora o Google Docs, um leque de aplicações de produtividade, que oferece a edição de documentos, folhas de cálculo, apresentações, e muito mais. O serviço é grátis mas caso queira mais armazenamento é necessário comprar",
        gratis: true,
    }

]
// const Listas = () => {
    
//     return (
//         <div>
//             <Tab.Container id="Gratis" defaultActiveKey="first">
//                 <Row>
//                     <Col sm={3}>
//                         <Nav variant="pills" className="flex-column">
//                             <Nav.Item>
//                                 <Nav.Link eventKey="first">{Listas.name}</Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item>
//                                 <Nav.Link eventKey="second">Discord</Nav.Link>
//                             </Nav.Item>
//                         </Nav>
//                     </Col>
//                     <Col sm={8}>
//                         <Tab.Content>
//                             <Tab.Pane eventKey="first">
//                                 Zoom
//                             </Tab.Pane>
//                             <Tab.Pane eventKey="second">
//                                 Discord
//                             </Tab.Pane>
//                         </Tab.Content>
//                     </Col>
//                 </Row>
//             </Tab.Container>
//         </div>
//     )
// }

export default Listas