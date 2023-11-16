'use client'
import { useEffect, useState } from 'react'
import { AboutTeacher } from './components/contain/AboutTeacher'
import { AboutTeacherTwo } from './components/contain/AboutTeacherTwo'
import Contain from './components/contain/Contain'
import { InfoFreeCourse } from './components/contain/InfoFreeCourse'
import { dataEvents } from '@/app/utils/dataEvents'

import Footer from './components/footer/Footer'
import Nav from './components/navbar/Nav'
import { FormPreSaleComponent } from './components/contain/FormPreSale'
import { Loader } from './components/Loader'

const Home = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Loader timmer while the app is setting the info
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  }, [])

  return (
    <>

      <Nav />
      <main>
        <Contain dataEvents={dataEvents} />
        <InfoFreeCourse dataEvents={dataEvents} />
        <AboutTeacher dataEvents={dataEvents} />
        <hr />
        <AboutTeacherTwo dataEvents={dataEvents} />
        <FormPreSaleComponent dataEvents={dataEvents[0].preSale} />
      </main>
      <Footer />
      <Loader loading={loading} />

    </>
  )
}

export default Home
