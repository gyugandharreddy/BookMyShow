import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button"

const IMAGE_API='https://image.tmdb.org/t/p/w500';
const TIMINGS=["10:30AM","03:00 PM","06:00 PM","09:00 PM"];
const Movie = ()=>{
const location=useLocation();
const navigate = useNavigate();
const{title,overview,poster_path}=location.state;
const[latLng,setLatLng]=useState({})
const [theaters,setTheatres]= useState([]);
useEffect(()=>{
if('geolocation' in navigator){
navigator.geolocation.getCurrentPosition((position)=>{
setLatLng({
  lat: position.coords.latitude,
  lng: position.coords.longitude
})

})

}

},[]);

// console.log(latLng)
useEffect(()=>{
    if(Object.keys(latLng).length>0){
    const geoAPI=`https://api.geoapify.com/v2/places?categories=entertainment.cinema&filter=circle:${latLng.lng},${latLng.lat},5000&bias=proximity:78.44202,17.3707564&lang=en&limit=20&apiKey=085f3159ad1a4d9abc5a6e0accade343`;
axios.get(geoAPI).then(res => {
const featuresArray=res.data.features;
   const names=[] ;
   featuresArray.map((feature)=>names.push(feature.properties.name));
   setTheatres(names)
//    console.log(names)
})
    }

},[latLng]);
    return(
<div>
<Row>
<Col>
<div style={{padding:70}}>
<img style={{borderRadius:8,marginBottom:10 }} src={IMAGE_API+poster_path} height={300} width={250}></img>
<h3>{title}</h3>
</div>
<div>
{overview}
</div>
</Col>
<Col> 
<div style={{padding:70}}>
{theaters.map((theater,index)=> {
return(
<div key={index} style={{marginBottom:20}}>
<h5 style={{marginBottom:10}}>{theater}</h5>
{TIMINGS.map((time)=>{
   return<Button onClick={()=>{
    navigate('/Seats',{state:{title:title}})
   }}    key={time} style={{marginRight:5,marginBottom:3}}>{time}</Button> 
})}

</div>

)


})}
</div>

</Col>
</Row>
</div>


    )
}

export default Movie;