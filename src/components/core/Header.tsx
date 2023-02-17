import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'


const Header = () => {
  const navigate = useNavigate();

  const plusproject = () => {
     navigate('/add')
  }

  return (
    <HeaderContainer>
      <div>pms</div>
      <button onClick={plusproject}>Add Project</button> 
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
  width: 100%;
  height: 2rem;
  
  display: flex;

  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  
  div{
    font-size: 1rem;
   
    margin-left: 2rem;
    line-height: 1.8;

    color:#808080c5;
  }

  button{
    height: 1.5rem;
    font-size: 0.7rem;
    font-weight: 500;

    margin-top: 0.25rem;
    margin-left: 1rem;
  
    border-radius: 3px;
    border: 0;
    cursor: pointer;
    transition: all 0.5s;
   
    color: #fff;
    background-color: #2a52d3;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    &:hover {
      background-color: #03288f;
    }
    }
    
`