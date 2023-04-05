import '../ItemDetail/ItemDetail.css'
import { useCart } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import {ItemCount} from '../Counter/ItemCount'
import {product} from '../../asynkMock'

export const ItemDetail = ({ id, name, img, category, description, precio, stock }) => {
    
    const { addItem, isInCart } = useCart()

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, precio, quantity
        }
        addItem(productToAdd)
    }

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: {precio}
                </p>
            </section>           
            <footer className='ItemFooter'>
          
            </footer>
        </article>
    )
}
