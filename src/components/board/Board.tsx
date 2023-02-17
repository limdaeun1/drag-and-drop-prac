import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom';
import Kanban from './Kanban';
import { useGet } from 'shared/http';

const Board = () => {

  

  return (
    <BoardContainer>
        <BoardHeader>
        Board
        </BoardHeader>
        
        <BoardBody>
          pj desc box
        </BoardBody>

        <Kanbancontainer>
            <Kanban/>
        </Kanbancontainer>
    </BoardContainer>
  )
}

export default Board

const BoardContainer = styled.div`
  width: calc(100% - 22rem);

  display: flex;
  flex-direction: column;

  margin:0 0.2rem;

  border:1px solid #80808037;
`

const BoardHeader = styled.div`
    height: 3rem;
    background-color: #80808037;
`

const BoardBody = styled.div`
  border:1px solid red;
  min-height: 5rem;
`

const Kanbancontainer = styled.div`
  /* height: calc(100vh - 8rem ); */
  flex: 1;
  border:1px solid red;
`