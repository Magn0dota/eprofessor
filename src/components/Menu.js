import { useState } from 'react'

const Menu = ({ menu }) => {
    const [selected, setSelected] = useState(false)
    return (
        <div className={"menu"} >
            <h3>{menu.item}</h3>
            <div className='checkbox'>
                <input type='checkbox' value={selected} onChange={(e) => setSelected(e.currentTarget.checked)}/>
                
            </div>
        </div>
    )
}
export default Menu
