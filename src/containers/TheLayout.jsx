import React from 'react'
import TheHeader from './TheHeader'
import TheContent from './TheContent'
import TheFooter from './TheFooter'


const TheLayout = () => {

  return (
    <div className="d-flex flex-column h-100">
      <div className="c-wrapper">
        <TheHeader/>
        <div className="main-page">
          <TheContent/>
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default TheLayout
