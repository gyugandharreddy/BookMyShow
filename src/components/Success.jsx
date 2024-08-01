import React from "react";
import { Row,Col } from "react-bootstrap";
import PopIMG from "../assets/pop.jpg";
import QrIMG from "../assets/qr.png";
const Success = ()=>{
    return(
      <div>
<Row >
<Col >
<div style={{padding:50,display:"flex",justifyContent:"center",alignItems:"center"}}>
<div>
<img src={PopIMG} height={220} style={{marginRight:5,borderRadius:30}}></img>
</div>
<div>
<h5>Tickets confirmed</h5>
<h6> Enjoy your Movie</h6>
</div>
</div>
</Col>

<Col>
<div style={{padding:20,display:"flex",justifyContent:"center",alignItems:"center"}}>
<img src={QrIMG} height={250}></img>
</div>
</Col>


</Row>




      </div>
        


    )
}
export default Success;




