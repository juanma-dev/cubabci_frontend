import juanmaPic from './assets/juanma.jpg'


function Footer() {
    return (
        <footer>
            <p>
                <img src={juanmaPic} alt="JuanMa" style={{ width: '77px', height: '77px' }}></img><br/>
                &copy; Denuncia Cuba BCI<br/>
                Juan Manuel Castellanos Hernández<br/>
                juanmanuelcastellanoshernandez@gmail.com<br/>
                {new Date().getFullYear()}<br/>
            </p>
        </footer>
    );
}

export default Footer;