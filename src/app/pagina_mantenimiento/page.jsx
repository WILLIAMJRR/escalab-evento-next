'use client'
import { useEffect, useState } from 'react'
import { Loader } from '../components/Loader'
import { ErrorScreenContainer, Title } from './styles'
import Link from 'next/link'

const PaginaMantenimiento = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Loader timmer while the app is setting the info
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  }, [])
  return (
    <div>
      <ErrorScreenContainer>
        <Link href='/'>Volver al registro</Link>
        <img src='/assets/Logo-escalab.svg' alt='' />
        <img src='/assets/image-404.svg' alt='' />
        <Title>Pagina en mantenimiento </Title>
      </ErrorScreenContainer>
      <Loader loading={loading} />
    </div>
  )
}

export default PaginaMantenimiento
