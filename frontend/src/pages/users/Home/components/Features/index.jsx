import React from 'react'
import FeatureCard from '../FeatureCard'
import hub from "../../../../../assets/icons/home/hub.svg"
import weelChair from "../../../../../assets/icons/home/weel_chair.svg"
import eco from "../../../../../assets/icons/home/eco.svg"
import building from "../../../../../assets/icons/home/building.svg"

const Features = () => {
  return (
    <div className='user-container'>
      <FeatureCard
      icon={hub}
      />
      <FeatureCard
      icon={weelChair}
      />
      <FeatureCard
      icon={eco}
      />
      <FeatureCard
      icon={building}
      />
    </div>
  )
}

export default Features