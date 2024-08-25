import React from "react"
import './App.css'
import Header from "./Component/Header"
import HeroImg from "./Component/HeroImg"
import Main from "./Component/Main"
import FAQ from "./Component/FAQ"
import Footer from "./Component/Footer"





function Landing() {
 

  return (


    <>



    <div className="hero">

    <Header/>
    <HeroImg/>
    </div>

    <Main/>
    <FAQ/>
    <Footer/>
   
 
    </>
  )
}

export default Landing;
