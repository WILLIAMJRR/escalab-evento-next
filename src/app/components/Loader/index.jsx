import React from 'react'

// Import custom styles
import { Modal, Border, BorderRadious } from './styles'

const Loader = ({ loading }) => {
  return (
    <Modal className={loading ? 'vissible' : 'hidden'}>
      <div className='container'>

        <Border className='borderWhite'>
          <BorderRadious className='borderRadiusWTop' />
          <BorderRadious className='borderRadiusWBottom' />
        </Border>

        <Border className='borderBlue'>
          <BorderRadious className='borderRadiusBTop' />
          <BorderRadious className='borderRadiusBBottom' />
        </Border>

        <div className='circle circleBlueL'>
          <div className='circle circleWhite'>
            <div className='circle circleBlueD'>
              <div className='containTriangle'>
                <img src='/assets/triangleB.svg' alt='' className='triangle triangleBlue' />
                <img src='/assets/triangleW.svg' alt='' className='triangle triangleWhite' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export { Loader }
