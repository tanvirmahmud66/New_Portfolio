import React, { useEffect, useState } from 'react'
// import { useEffect } from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { GlobalStyle } from './styles/global'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Project } from './components/Project/Project'
import styled from 'styled-components'
import SingleProject from './components/Project/SingleProject'


const Container = styled.main`
  position: relative;
  z-index: 0;
  padding: 0 30rem;
  overflow-x: hidden;
  #tsparticles{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  @media (max-width: 740px){
    padding: 0 4rem;
  }

  @media(max-width: 360px){
    padding: 0 2rem;
  }
`

function App() {

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Router>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/project/:slug' element={<Container><SingleProject/></Container>}/>
        </Routes>
      </Router>
      {/* <Main></Main> */}
      <Footer></Footer>
    </>
  )
}

export default App
