import { useEffect, useState } from "react"
import { getProducts,  getProductsByCategory} from "../../asynkMock"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"



const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const {categoryId}= useParams()
    useEffect(() => {
        
        
        const asyncFunction = categoryId ? getProductsByCategory : getProducts
        
        
        asyncFunction()
            .then(products => {
                setProducts(products)
            })
            .catch(error=>{
                console.log(error)
            })

    }, [categoryId  ])
    console.log(products)
    return (
        <div>
            <h1 style={{fontWeight:"lighter"}}>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )

}
export default ItemListContainer