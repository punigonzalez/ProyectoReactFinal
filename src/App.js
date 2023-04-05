import './App.css';
import Navbar from './Componentes/Navbar/navbar';
import ItemListContainer from './Componentes/ItemListcontainer/ItemListContainer';
import { ItemDetailContainer } from './Componentes/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Be cool'}/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos filtrador por categoria'}/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}   />
          </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
