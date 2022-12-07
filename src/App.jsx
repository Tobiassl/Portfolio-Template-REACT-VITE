import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Main } from './components/Main'
import {Contacto} from './pages/contacto'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import {Otrapagina} from './pages/otrapagina'

function App() {
  

  return (
    <div className="caja">

<BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/contacto' element={<Contacto/>}/>
                <Route path='/otrapagina'element={<Otrapagina/>}/>
            </Routes>
            </BrowserRouter>

    <Footer/>
    </div>
  )
}

export default App