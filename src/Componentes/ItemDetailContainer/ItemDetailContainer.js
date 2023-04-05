import { useState, useEffect } from "react"
import { getProducts } from "../../asynkMock"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"


 export const ItemDetailContainer = () => {
  const [product, setProduct]= useState()

  const {itemId}= useParams()


 useEffect(()=>{
    getProducts (itemId).then(response=>{
    setProduct(response)
  }).catch(error=>{
    console.log(error)  
  })
 },[itemId])



  return (
    <div className="ItemDetailContainer">
      <ItemDetail {...product}/>
      
    </div>
  )
}
