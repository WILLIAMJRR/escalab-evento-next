import Link from 'next/link'
import { HeaderFreeCourseContain } from './style'
import { BunddleHeader } from './BunddleHeader'

const Contain = ({ dataEvents }) => {
  return (
    <HeaderFreeCourseContain>
      <div className='headerContainElements'>
        <figure className='headerContainImage'>
          <img className='bgHeader' src={dataEvents[0].assets.background} alt='background' />
          <img
            className='moveImage'
            src={dataEvents[0].assets.headerTeacher}
            alt='Techer javascript escalab'
          />

        </figure>

        <div className='headerContainText'>
          <span className='bunddle'>
            <img src='/assets/live-icon.svg' alt='Icon live' />
            <h6>{dataEvents[0].HeaderInfo.textBundle}</h6>
          </span>
          <h1>
            {dataEvents[0].HeaderInfo.title}
            <span className='TextStrong'> {dataEvents[0].HeaderInfo.name}</span>
          </h1>

          <div className='mentorFocus'>
            <h3>
              {dataEvents[0].teacher.name}
              <figure>
                <img src={dataEvents[0].assets.flag} alt='chile' />
              </figure>
            </h3>
            <p>{dataEvents[0].teacher.focus}</p>
          </div>

          <div>
            {dataEvents[0].HeaderInfo.info.map((infoDate, i) => (
              <BunddleHeader key={i} information={infoDate} />
            ))}
          </div>
          <div>
            <p>{dataEvents[0].Direccion.info}</p>
          </div>
          <div className='sponsor'>
            {dataEvents[0].sponsor.map((sponsored, key) => (
              <div className='contain__image' key={key}>
                <h1>{sponsored.title}</h1>
                <figure>
                  <img
                    src={sponsored.img}
                    alt={sponsored.alt}
                  />
                </figure>
              </div>
            ))}

          </div>
        </div>
      </div>
      <Link href='#form'>REGISTRATE AQUI</Link>
    </HeaderFreeCourseContain>
  )
}

export default Contain
