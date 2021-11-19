import Header from './components/Header'
import Menus from './components/Menus'
import { useState } from 'react'
import background from './images/background.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from './components/Button'
import ListaGratis from './components/ListaGratis'
import ListaPago from './components/ListaPago'

function App() {
  const [showListaGratis, setShowListaGratis] = useState(false)
  const [showListaPago, setShowListaPago] = useState(false)

  return (
    <>
      <div style={{ backgroundImage: `url(${background})`, width: '100%', height: '100%' }} >

        <div className="container-bootstrap-override">
          <Header />
          <Button color='teal' text='Exibir ferramentas gratuitas' onClick={() => setShowListaGratis(true) & setShowListaPago(false)}/>
          <Button color='teal' text='Exibir ferramentas pagas' onClick={() => setShowListaPago(true) & setShowListaGratis(false)}/>
        </div>
        <div className="container2">
          {showListaGratis && <ListaGratis onShow={ListaGratis}/>}
          {showListaPago && <ListaPago onShow={ListaPago}/>}
        </div>
      </div>
    </>
    
  );
}

export default App;
