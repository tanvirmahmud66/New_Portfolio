import React, { useEffect, useState } from 'react'
// import { useEffect } from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { GlobalStyle } from './styles/global'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SingleProject from './components/Project/SingleProject'



function App() {

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/project" element={<SingleProject/>}/>
        </Routes>
      </Router>
      {/* <Main></Main> */}
      <Footer></Footer>
    </>
  )
}

export default App
