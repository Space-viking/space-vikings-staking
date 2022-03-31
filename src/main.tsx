import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './views/navbar/navbar'
import Staking from './views/staking/staking'
import Footer from './views/footer/footer'

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