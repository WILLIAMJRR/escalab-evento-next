import { InfoFreeCourseContain } from './styles'

const InfoFreeCourse = ({ dataEvents }) => {
  return (
    <InfoFreeCourseContain>
      <div className='InfoFreeContainItem'>
        <div>
          <figure>
            <img src={dataEvents[0].assets.insignea} alt='javascript curso' />
          </figure>
          <h1>{dataEvents[0].InfoBox.info[0].header}</h1>
        </div>
        <div>
          <p>{dataEvents[0].InfoBox.info[0].description}</p>
        </div>
      </div>

    </InfoFreeCourseContain>
  )
}

export { InfoFreeCourse }
