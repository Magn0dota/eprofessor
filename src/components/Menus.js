import Menu from "./Menu"

const Menus = ({ menus }) => {
    return (

        <>
            {menus.map((menu) => (
                <Menu
                    key={menu.id}
                    menu={menu}
                />
            ))}
        </>
    )
}

export default Menus
