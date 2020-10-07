import React from 'react'
import logo3 from './images/logo3.jpg'
import Background from './images/background.jpg'

function Welcome () {
  var sectionStyle = {
    backgroundImage: `url(${Background})`
    // width:100vw",
  }

  return (
    <div className='welcome_div' style={sectionStyle}>
      <div className='welcome_div1'>
        <div className='logo_set'>
          <div>
            <img src={logo3} alt="img" className='logo3' />{' '}
          </div>
          <div>
            {' '}
            <h1> WELCOME</h1>
            <hr color='red' />
          </div>
        </div>
        <br />

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </div>
    </div>
  )
}

export default Welcome
