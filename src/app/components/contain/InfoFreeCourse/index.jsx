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
          <p>{dataEvents[0].InfoBox.info[0].parrafo}</p>
          <p>{dataEvents[0].InfoBox.info[0].description}</p>
          <h4>{dataEvents[0].InfoBox.info[0].title}</h4>
          <h5>{dataEvents[0].InfoBox.info[0].parrafo1}</h5>
          <h5>{dataEvents[0].InfoBox.info[0].parrafo2}</h5>
          <h5>{dataEvents[0].InfoBox.info[0].parrafo3}</h5>
          <h5>{dataEvents[0].InfoBox.info[0].parrafo4}</h5>
          <h5>{dataEvents[0].InfoBox.info[0].parrafo5}</h5>
          <h5>{dataEvents[0].InfoBox.info[0].parrafo6}</h5>

        </div>
      </div>

    </InfoFreeCourseContain>
  )
}

export { InfoFreeCourse }
