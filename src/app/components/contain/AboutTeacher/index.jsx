// Import custom styles
import Link from 'next/link'
import {
  AboutTeacherS,
  TextTeacher,
  ImgContainer,
  AboutWrapper
} from './styles'

// Import icons fron react-icons
import { FaLinkedin } from 'react-icons/fa'

// Import img of the text container
// import comillas from '../../../../../../../assets/comillas-white.png'

const AboutTeacher = ({ dataEvents }) => {
  return (
    <AboutTeacherS>
      <AboutWrapper>
        <TextTeacher>
          <h1>
            <Link href={dataEvents} target='_blank' rel='noreferrer'>
              <span>
                <FaLinkedin size={35} fill='#4E73DE' />
              </span>
            </Link>
            ¡Hola!,Soy {dataEvents[0].teacher.name}
            .
          </h1>
          <p className='currentWork'>{dataEvents[0].teacher.focus}</p>
          <p className='description'>{dataEvents[0].teacher.description}</p>
          <img src='\assets\comillas-black.svg' alt='Comillas' className='comillas' />
        </TextTeacher>

        <ImgContainer>
          <img src={dataEvents[0].assets.headerTeacher} alt='Teacher' />
        </ImgContainer>
      </AboutWrapper>
    </AboutTeacherS>
  )
}

export { AboutTeacher }
