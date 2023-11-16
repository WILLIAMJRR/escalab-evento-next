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

const AboutTeacherTwo = ({ dataEvents }) => {
  return (
    <AboutTeacherS>
      <AboutWrapper>
        <ImgContainer>
          <img src={dataEvents[0].assets.headerTeacherTwo} alt='Teacher' />
        </ImgContainer>
        <TextTeacher>
          <h1>
            <Link href={dataEvents} target='_blank' rel='noreferrer'>
              <span>
                <FaLinkedin size={35} fill='#4E73DE' />
              </span>
            </Link>
            ¡Hola!,Soy {dataEvents[0].teacher_two.name}
            .
          </h1>
          <p className='currentWork'>{dataEvents[0].teacher_two.focus}</p>
          <p className='description'>{dataEvents[0].teacher_two.description}</p>
          <img src='\assets\comillas-black.svg' alt='Comillas' className='comillas' />
        </TextTeacher>

      </AboutWrapper>
    </AboutTeacherS>
  )
}

export { AboutTeacherTwo }
