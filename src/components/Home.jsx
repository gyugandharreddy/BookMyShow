import React,{useEffect, useState} from "react";
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import { useNavigate } from "react-router-dom";
const MOVIE_API='https://api.themoviedb.org/3/discover/movie?api_key=7ff7706b6316b45b68e3e22609511abd';
const IMAGE_API='https://image.tmdb.org/t/p/w500';
const Home=()=>{
const [movies,setMovies]=useState([])
const navigate = useNavigate();

useEffect(()=>{
const user=localStorage.getItem('userEmail');
if(!user){
    navigate('/Login')
}
},[])




useEffect(()=>{
axios.get(MOVIE_API).then((res)=>{
    setMovies(res.data.results)
})
},[])
const handleClick=(movie)=>{
navigate('/Movie/'+ movie.id,{state:movie})
}




    return(
        <div className="maindiv" style={{padding:30 ,display:'grid'}} >
{movies.map(movie =>{
    // console.log(movie.posterpath);
    return(
      <div key={movie.id}  >

<Card onClick={()=>handleClick(movie)}  style={{widows:'25rem',padding:25,height:'auto',overflow:'hidden',margin:10,}}>
    <Card.Img  className="card_img" src={IMAGE_API + movie.poster_path}   ></Card.Img>
    <Card.Title >{movie.title}</Card.Title>
    {/* <Card.Text>{movie.overview}</Card.Text> */}
</Card>
 </div>)

})}
        </div>
    )
}

export default Home;
