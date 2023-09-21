'use client'
import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { Loader } from './components/Loader'

const notFound = () => {
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
        <Link href='/'>Volver al Inicio</Link>
        <img src='/assets/image-404.svg' alt='' />
        <Title>Pagina no encontrada </Title>
      </ErrorScreenContainer>
      <Loader loading={loading} />
    </div>

  )
}

export default notFound

export const Title = styled.h1`
    margin: 25px 0 0;color:black
`

export const ErrorScreenContainer = styled.div`
    width:100%;
    height:100vh;
    display: flex;
    padding:230px 10px;
    flex-direction: column;
    gap:2rem;
    align-items: center;
    justify-content: center;
    text-align: center;

    a{
        color: white;
        background-color:#4e73de;
        border-radius: 5px;
        padding: 10px 20px;
        text-decoration: none;
        font-weight: bold;
        font-size: 20px;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        display:flex;
        align-items: start;

    }

    img{
        width: 800px;
    }


    @media (max-width: 750px) {
        img {
            width: 350px;
            padding: 0 10px;
        }
    }
`
