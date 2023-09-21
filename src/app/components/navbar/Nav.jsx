import { Navbar, NavbarWrapperLogo } from './style'
import Link from 'next/link'
const Nav = () => {
  return (
    <Navbar>
      <NavbarWrapperLogo>
        <Link href='/pagina_mantenimiento'>
          <img
            src='/assets/logoNav.svg'
            alt='Logo Escalab'
          />
        </Link>

      </NavbarWrapperLogo>
      <button className='button'><Link href='#form'>Registrate aqui</Link></button>
    </Navbar>
  )
}

export default Nav
