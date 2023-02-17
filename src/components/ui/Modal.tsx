import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import AddPj from 'components/add/AddPj';

const Modal = () => {
    const [pathname, setPathname] = useState('/');
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setPathname(location.pathname);
    }, [location.pathname]);

    if (pathname !== '/add') {
        return null;
    }
 

  return (
    <>
        <Background onClick={() => navigate(-1)}></Background>
        <ModalContainer>
            <AddPj/>
        </ModalContainer>
    </>
  )
}

export default Modal

const ModalContainer = styled.div`
    width: auto;
    height: auto;

    padding: 1.5rem 1rem;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    background-color: white;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    border-radius: 1rem;
    box-sizing: border-box;

    z-index: 11;
`

const Background = styled.div`
    width: 100%;
    height: 100%;

    position: absolute;

    background-color: #37474F;
    opacity: 0.75;
    
    z-index: 10;

    cursor: pointer;
`