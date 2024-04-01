import React, {useState} from 'react'
import "./style.css"
import search from "../../../../../assets/icons/home/search.svg"
import { maptiler } from "pigeon-maps/providers";
import { Map, Marker } from "pigeon-maps";

const UserMap = () => {
  const maptilerProvider = maptiler("Zj9yrH5JXUOIXO4Zsxqu", "dataviz-dark");
  const [center, setCenter] = useState([33.223423, 35.312312])
  const [zoom, setZoom] = useState(11)
  
  return (
    <div className='map-container user-container'>
      <div className='map-search-wrapper'>
        <div className='map-search'>
          <img className='search-icon' src={search} alt="search" />
          <input type="text" placeholder='Search a station' />
        </div>
      </div>
      <div className='flex center bg-primary map-wrapper'>
        <Map
        provider={maptilerProvider}
        height={770}
        center={center}
        zoom={zoom}
        onBoundsChanged={({ center, zoom }) => { 
          setCenter(center) 
          setZoom(zoom) 
        }} 
        >
          <Marker anchor={[33.223423, 35.312312]} width={50} color="#66b896" />
        </Map>
      </div>
    </div>
  )
}

export default UserMap