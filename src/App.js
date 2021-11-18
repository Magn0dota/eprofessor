import Header from './components/Header'
import Menus from './components/Menus'
import { useState } from 'react'
import background from './images/background.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from './components/Button'
import Listas from './components/Listas'

function App() {
  const [showListas, setShowListas] = useState(false)
  const [menus] = useState([
    {
        id: 1,
        item: "Software gratuito",
        selected: false,
    },
    {
        id: 2,
        item: "Software pago",
        selected: false,
    },
  ])

  return (
    <>
      <div style={{ backgroundImage: `url(${background})`, width: '100vw', height: '100vh' }} >

        <div className="container">
          <Header />
          <Menus menus={menus} />
          <Button color='green' text='funciona pfv codigo' />
        </div>
        <div className="container2">
          {showListas && <Listas/>}
        </div>
      </div>
    </>
    
  );
}

export default App;
