import React, {useEffect, useState} from 'react'
import "./style.css"
import search from "../../../../../assets/icons/home/search.svg"
import { sendRequest } from '../../../../../core/tools/remote/request';
import { maptiler } from "pigeon-maps/providers";
import { Map, Marker, Overlay } from "pigeon-maps";
import { useNavigate } from 'react-router-dom';
import stationImage from "../../../../../assets/images/home/stationImage.jpg"
import { requestMethods } from '../../../../../core/enums/requestMethods';

const UserMap = () => {
  const maptilerProvider = maptiler("Zj9yrH5JXUOIXO4Zsxqu", "dataviz-dark");
  const navigate = useNavigate()
  const [center, setCenter] = useState([33.223423, 35.312312])
  const [zoom, setZoom] = useState(11)
  const [stations, setStations] = useState([])
  const [filteredStations, setFilteredStations] = useState([])
  const [searchInput, setSearchInput] = useState("")


  useEffect(()=>{ sendRequest(requestMethods.GET, "/get-stations")
    .then((response)=>{
      const data = response.data
      if(data.status === "success"){
        setStations(data.stations)
      }
    }).catch((error) => {
        console.error("Error fetching stations:", error);
    });
  }
  ,[])
 

  const handleMapInputChange = (e) => {
    setSearchInput(e.target.value)
  }

  const filterStations = () => {
    const filtered = stations.filter((station)=> station.name.toLowerCase().includes(searchInput.toLowerCase()))
    setFilteredStations(filtered)
  }

  return (
    <div className='map-container user-container'>
      <div className='map-search-wrapper'>

        <div className='map-search'>
          <img className='search-icon' src={search} alt="search" />
          <input 
          type="text" 
          placeholder='Search a station'
          value={searchInput}
          onChange={(e)=>{
            handleMapInputChange(e)
            filterStations()
            }}/>
        </div>

        <div className={`flex column bg-dark-gray-col search-result ${searchInput? "" : 'hidden'} `}>
          {stations && filteredStations.map((station)=>(
            <p 
            key={station.id}
            className='text-primary' 
            onClick={(e)=>{setCenter([station.latitude, station.longtitude])
            setZoom(14)}}
            >{`${station.name}`}</p>
          ))}
        </div>

      </div>

      <div className='flex center bg-primary map-wrapper'>
        <Map
        provider={maptilerProvider}
        height={770}
        center={center}
        zoom={zoom}
        // onBoundsChanged={({ center, zoom }) => { 
        //   setCenter(center) 
        //   setZoom(zoom) 
        // }}
        >

        {stations && stations.map((station)=>{
          const {id, name, latitude, longtitude, status} = station
          if(status === "active"){
            return(

            <Marker 
            key={id}
            className='outer-marker' 
            anchor={[latitude, longtitude]} 
            width={50} color="#d9d9d9" 
            onClick={() => navigate("/station")}>
              <p className='marker-text'>{`${name}`}</p>
              <Marker width={50} color="#66b896"/>
            </Marker>

            )
          }
        })}
        </Map>
      </div>
    </div>
  )
}

export default UserMap