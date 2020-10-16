import React from 'react'
import {useParams, useHistory} from "react-router-dom"
import {BiArrowBack} from "react-icons/bi"
import useDataProducts from "../useCustomHooks/useDataProducts";
import {Button} from "react-bootstrap"
export const Child = () => {
    const {products ,category} =useDataProducts()
    const {productId} =useParams()
    const history = useHistory()
    const focus = products.filter((d) => d.id === parseInt(productId));
    
    return (
        <div>
            <a style={{color:"#0275d8"}} onClick={()=>history.goBack()}> <BiArrowBack/> Back</a>
            {focus?.map((d,i)=>(
                <div key={i} style={{display:"flex", flexDirection:"row", justifyContent:"center", maxHeight:" 500px", overflow:"auto"}}>
                <img src={d.pic} alt="" style={{width:"30%", marginRight:"5%"}}/>
                <div style={{display:"flex", flexDirection:"column", width:"50%"}}>
                    <h2 style={{fontWeight:"bold"}}>{d.name}</h2>
                    <h5 ><mark style={{fontWeight:"bold", backgroundColor:"#0275d8" ,color:"white"}}>{d.price}</mark></h5>
            <h5><b>Category:</b> {d.category}</h5>
            <h5><b>Description:</b> {d.description}</h5>
                <Button variant="primary" style={{marginTop:"auto"}}>Add to cart</Button>
                </div>
                </div>
            ))}
        </div>
    )
}
