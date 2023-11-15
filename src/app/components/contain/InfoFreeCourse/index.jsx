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
          <ul>{dataEvents[0].InfoBox.info[0].parrafo4}
            <li>Qué es el programa de socios de soluciones de Microsoft y cuáles son sus ventajas.</li>
            <li>Qué requisitos se necesitan para obtener la designación como socio de soluciones en Infraestructuras.</li>
            <li>Qué certificaciones de Azure se recomiendan para demostrar tus competencias en el diseño, implementación y administración de infraestructuras en la nube.</li>
            <li>Cómo acceder a una ruta de aprendizaje ágil y efectiva para la preparación de los exámenes de certificación.</li>
          </ul>
          <h5>{dataEvents[0].InfoBox.info[0].parrafo5}</h5>
          <h5>{dataEvents[0].InfoBox.info[0].parrafo6}</h5>

        </div>
      </div>

    </InfoFreeCourseContain>
  )
}

export { InfoFreeCourse }
