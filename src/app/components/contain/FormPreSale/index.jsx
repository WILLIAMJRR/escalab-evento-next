// Import HubspotForm library
import { HubspotForm } from 'react-hubspot-forms'

// Import custom styles
import { SpaceForm } from './styles'

const FormPreSaleComponent = ({ dataEvents }) => {
  return (
    <SpaceForm
      className='spaceForm'
      id='form'
    >
      <p>Regístrate sin costo</p>
      <HubspotForm
        region='na1'
        portalId={dataEvents.portalId}
        formId={dataEvents.formId}
      />
    </SpaceForm>
  )
}

export { FormPreSaleComponent }
