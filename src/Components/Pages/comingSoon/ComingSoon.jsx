
import React from 'react'
import module from './ComingSoon.module.css'
import Img from '../../Assets/picture/Coming Soon.png'

const ComingSoon = () => {
  return (
   <>
      <div className={module.ComingSoon}>
           <div className={module.ComingMain}>
              <div className={module.Img}>
                <img src={Img} alt="ComingSoon" />
              </div>
           </div>
      </div>
   </>
  )
}

export default ComingSoon