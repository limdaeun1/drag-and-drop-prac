import React from 'react'
import Main from 'page/Main'
import Login from 'page/Login'
import styled from 'styled-components'
import { useSelector } from 'react-redux'



const App = () => {

  const user = useSelector((state: any) => state.module.user);
  const load = useSelector((state: any) => state.module.load);
  

  return (
    <>
      {user === null ? <Login/> : <Main/>}
      {load ? <LoadContainer/> : null }
    </>
   
  )

}

export default App

const LoadContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: white;
  opacity: 0;
  z-index: 12;
  cursor: not-allowed;
`