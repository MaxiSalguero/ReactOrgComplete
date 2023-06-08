import "./Footer.css"
import {SiLinkedin} from "react-icons/si"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.facebook.com/maximiliano.salguero.39501'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://www.linkedin.com/in/maximiliano-salguero/'>
                {<SiLinkedin color="white"/>}
            </a>
            <a href='https://www.instagram.com/salguero_maxi/'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Maximiliano Salguero</strong>
    </footer>
}

export default Footer