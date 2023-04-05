import '../Item/Item.css'
import { Link } from 'react-router-dom'


export const Item = ({id,name,img,precio}) => {
  return (
<article className='CardItem'>
  
  <header className='Header'>
    <h2 className='ItemHeader'>
      {name}
    </h2>
    </header>
  <picture>
    <img className='ItemImg' src={img} alt={name} />
  </picture>
  <section>
    <p className='Info'>
      ${precio}
    </p>
  </section>
  <footer className='ItemFooter'>
    <Link to={`/item/${id}`} className='Option'>Ver detalle</Link> 
  </footer>
  
  </article>
   
  )
}

