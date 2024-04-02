import React, {useState} from 'react'
import "./style.css"
import search from "../../../../../assets/icons/home/search.svg"
import { maptiler } from "pigeon-maps/providers";
import { Map, Marker, Overlay } from "pigeon-maps";
import stationImage from "../../../../../assets/images/home/stationImage.jpg"

const UserMap = () => {
  const maptilerProvider = maptiler("Zj9yrH5JXUOIXO4Zsxqu", "dataviz-dark");
  const [center, setCenter] = useState([33.223423, 35.312312])
  const [zoom, setZoom] = useState(11)
  const [clickedLocation, setClickedLocation] = useState([]) 
  const stations = ["haz" ,"saida" , "beirut", "chtaura"]
  console.log(clickedLocation)

  

  return (
    <div className='map-container user-container'>
      <div className='map-search-wrapper'>
        <div className='map-search'>
          <img className='search-icon' src={search} alt="search" />
          <input type="text" placeholder='Search a station' />
        </div>
        <div className='flex column bg-dark-gray-col search-result'>
          {stations && stations.map((station)=>(
            <p 
            className='text-primary' 
            onClick={(e)=>{setCenter([33.854144451113136, 35.5352250577302])
            setZoom(14)}}
            >{`${station}`}</p>
          ))}
          
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
        onClick={(e) => setClickedLocation(e.latLng)} 
        >
          <Overlay anchor={[33.854144451113136, 35.5352250577302]} offset={[45, 120]}>
            <img src={stationImage}  height={60} alt='stationImage' />
          </Overlay>
          <Marker className='outer-marker' anchor={[33.223423, 35.312312]} width={50} color="#d9d9d9" onClick={(e) => console.log("outer Marker")}>
          
            <p className='marker-text'>Hazmiyeh station</p>
            <Marker width={50} color="#66b896" onClick={(e) => console.log("inner Marker")}/>
          </Marker>
          <Marker anchor={[33.223423, 35.512312]} width={50} color="#66b896" />
          <Marker anchor={[33.854144451113136, 35.5352250577302]} width={50} color="#66b896" />
        </Map>
      </div>
    </div>
  )
}

export default UserMap