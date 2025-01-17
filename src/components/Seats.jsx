
import {Row,Col,Button} from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Seats (){
const location=useLocation();
const navigate=useNavigate();
const {title} = location.state;
const [SeatsMatrix,setSeatsMatrix]=useState([]);
const [selectedSeats,setSelectedSeats]= useState([]);

const  createSeats = () =>{
    let totalRows=5;
let nomberOfSeatsInaRow=8;
let tempSeats=[];
let row =0;
let ch = 'A';
while(row < totalRows){
let col = 1;
let rowArr = [];
while(col <= nomberOfSeatsInaRow){
    rowArr.push(ch+col);
    col++;
}
tempSeats.push(rowArr);
row++;
ch=String.fromCharCode(ch.charCodeAt(0)+1);//increment the letter A,B,C...

}
setSeatsMatrix(tempSeats);


}
useEffect(()=>{
    createSeats();
},[])

const handleSelect = (newSeat)=>{
setSelectedSeats([...selectedSeats,newSeat])

}


    return(
    <div style={{padding:50}}>
<div>
    <h3 className="d-inline-block">{title}</h3>
    <div className="d-inline-block" style={{marginLeft:100}}>Screen this side</div>
</div>
<div  style={{marginTop:50}}>
{
SeatsMatrix.map((seatsArr)=>{
return(
<Row  style={{marginBottom:25}}>
{seatsArr.map((seat )=>{
    let isSelected=selectedSeats.indexOf(seat)>-1
return <Col >

<Button style={{backgroundColor:isSelected?'green':'grey',border:'none'}} onClick={ ()=>handleSelect(seat)}  >{seat}</Button>
</Col>
})}
    
</Row>

)
})

}
</div>
<div style={{marginTop:45}}>
{
selectedSeats.length > 0 ? 

<div>

     {selectedSeats.map((seat)=>{
return<span style={{marginRight:5}}>{seat}</span>

     }) } 
selected Seats
<div>
    <h4>total: RS {selectedSeats.length * 200}</h4>
    <Button onClick={()=>navigate('/Success')}>checkout</Button>
</div>


</div>:<div>no seats selected</div>


}


</div>

    </div>
    )
}






