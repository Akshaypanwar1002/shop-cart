import React from 'react'
import { MdDelete } from "react-icons/md";


const Cart = () => {
  return (
    <div style={{display:"flex" ,justifyContent:"center" ,alignItems:"center", height:"100vh"}}>
        <div style={{display:"flex",gap:"5rem" ,justifyContent:"center",alignItems:"center"}}>
            <img src="https://m.media-amazon.com/images/I/71k81fIHRAL._SX679_.jpg" alt="" style={{height:"20vh",width:"10vw"}}  />
            <span >Bottle</span>
            <span style={{cursor:"pointer"}}><MdDelete style={{color:"red"}} /></span>

        </div>
    </div>
  )
}

export default Cart