import React from 'react'
import "./style.css"

import FeatureCard from '../FeatureCard'

import hub from "../../../../../assets/icons/home/hub.svg"
import weelChair from "../../../../../assets/icons/home/weel_chair.svg"
import eco from "../../../../../assets/icons/home/eco.svg"
import building from "../../../../../assets/icons/home/building.svg"

const Features = () => {
  return (
    <div className='flex column features-container user-container'>

      <h1>Why Metro<span className='text-primary'>Hub</span>?</h1>
      <div className='flex features-wrapper'>
        <FeatureCard
        icon={hub}
        heading={"Seamless Connectivity"}
        text={"The subway system establishes a robust network of interconnected lines, facilitating effortless travel between various neighborhoods and city landmarks. This efficient connectivity streamlines urban mobility, reducing commute times and traffic congestion."}
        />

        <FeatureCard
        icon={weelChair}
        heading={"Accessibility for All"}
        text={"Prioritizing inclusivity, subway stations are designed with features catering to passengers of diverse abilities. Elevators, ramps, and other accessibility measures ensure that everyone, regardless of mobility challenges, can navigate the system with ease."}
        />

        <FeatureCard
        icon={eco}
        heading={"Sustainable Transport"}
        text={"Embracing eco-friendly commuting alternatives, the subway system significantly diminishes carbon emissions and environmental impact. By promoting public transit over private vehicles, it fosters cleaner air and supports the city's sustainability goals."}
        />

        <FeatureCard
        icon={building}
        heading={"City Harmony"}
        text={"Seamlessly blending into the cityscape, subway stations serve as dynamic hubs connecting commuters to surrounding communities and amenities. This integration enhances urban vitality, fosters economic development, and cultivates vibrant, pedestrian-friendly environments."}
        />
      </div>
    </div>
  )
}

export default Features