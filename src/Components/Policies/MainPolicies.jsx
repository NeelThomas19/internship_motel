import React from 'react'
import Policies from './Policiesnew'
import FAQ from './FAQ'
import ImpInfo from './ImpInfo'
import Feedback from './Feedback'
import "./MainPolicies.css";

const MainPolicies = () => {
  return (
    <div className='mainpolicies'>
        <Policies/>
        <ImpInfo/>
        <FAQ/>
        <Feedback/>
    </div>
  )
}

export default MainPolicies