import Link from 'next/link'
import { FooterS, ContainerData, AboutProduct, Author } from './style'
import { FaTelegramPlane, FaLinkedin, FaInstagram, FaFacebookSquare, FaYoutube, FaDiscord } from 'react-icons/fa'
import { variables } from '../../../../styles/variables'
const Footer = () => {
  return (
    <FooterS>
      <ContainerData>
        <figure>
          <img src='/assets/logoNav.svg' alt='Logo Escalab on demand' />
        </figure>

        <AboutProduct>
          {/* <div className='text'>
            <h2>Para Empresas</h2>
            <p>Contratar Developers</p>
            <p>Marketplace de reclutamiento</p>
            <p>Bootcamp de reclutamiento</p>
            <p>Upskilling para equipos TI</p>
          </div>

          <div className='text'>
            <h2>Para Talentos</h2>
            <p>Quiero ser Developer</p>
            <p>Escalab Academy</p>
            <p>Comunidad en Discord</p>
            <p>Comunidad de Telegram</p>
          </div>

          <div className='text'>
            <h2>Sobre Escalab</h2>
            <p>Prensa y medios</p>
            <p>Sobre nosotros</p>
            <p>Programa +500 Digital</p>
            <p>Agenda una llamada</p>
          </div> */}

          <div className='social'>
            <h2>Siguenos</h2>

            <div className='social__grid'>
              <Link href='https://t.me/+HEdRvh9vvhw0NWMx'><FaTelegramPlane size='30px' color={variables.colors.parragraphColor} /></Link>
              <Link href='https://www.linkedin.com/company/escalab/'><FaLinkedin size='30px' color={variables.colors.parragraphColor} /></Link>
              <Link href='https://www.instagram.com/escalab.tech/'><FaInstagram size='30px' color={variables.colors.parragraphColor} /></Link>
              <Link href='https://www.facebook.com/escalab.tech'><FaFacebookSquare size='30px' color={variables.colors.parragraphColor} /></Link>
              <Link href='https://www.youtube.com/c/EscalabAcademy'><FaYoutube size='30px' color={variables.colors.parragraphColor} /></Link>
              <Link href='https://discord.com/invite/dFVZyErFZm'><FaDiscord size='30px' color={variables.colors.parragraphColor} /></Link>
            </div>
          </div>
        </AboutProduct>

      </ContainerData>

      <Author>
        <h2>© 2022 Todos los derechos reservados por Escalab</h2>
        <ul className='links'>
          <li><Link href='https://escalab.tech/terminos-y-condiciones' target='_blank' rel='noreferrer'>Términos y condiciones</Link></li>
          <li><Link href='https://escalab.tech/politicas-de-privacidad' target='_blank' rel='noreferrer'>Política de privacidad</Link></li>
          <li><Link href=''>Mapa de sitio</Link></li>

        </ul>
      </Author>
    </FooterS>
  )
}

export default Footer
