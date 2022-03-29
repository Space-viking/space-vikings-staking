import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './components/navbar/navbar'
import Staking from './components/staking/staking'
import Footer from './components/footer/footer'

const Main:React.FC=()=>{
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Staking/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}
export default Main