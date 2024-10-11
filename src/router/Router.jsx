//-------ROUTER ----------
import { BrowserRouter, Route , Routes } from 'react-router-dom'
//-----------COMPONENTS--------------
import Header from '../components/Header'
import Footer from '../components/Footer'
//------------ PAGES ---------

function Router() {
  return (
    <>
    <BrowserRouter>
    
       <Header/>
       <Footer/>
    </BrowserRouter>
    </>
  )
}

export default Router