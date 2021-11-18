import PropTypes from 'prop-types'

const Header = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
            <p>O e-Professor é um site que reúne várias ferramentas para auxiliar professores no ensino a distancia e tornar o processo menos complicado e mais eficiente, aqui você encontra informaçoes sobre softwares úteis que ajudam a elevar a qualidade do ensino durante suas aulas.</p>
            <h3>Selecione o tipo de software que deseja:</h3>
        </header>
    )
}

Header.defaultProps = {
    title: "e-Professor",
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
