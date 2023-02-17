import styled from "@emotion/styled";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGet , post } from "shared/http";
import { Link } from "react-router-dom";


function Kanban() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const CardData = useGet('http://192.168.20.24:8080/api/items/24')
  console.log(CardData)


  const addCard = () => {
    navigate('/addcard')
  }

 

  return (
    <Container>
        <List>
            {CardData?.cards.map((card:any , index:any)=> (
            <StyledLink to={`/card?id=${card.id}`}>
            <Card>
                <p>{card.title}</p>
                {card?.assignees.map((assignee:any, index:any)=> (
                <P><p>{assignee.user.auth}</p></P>
                ))}
                <p>{card.dueDate}</p>
                <p>전체/남은task </p>
            </Card>
            </StyledLink>
            ))}
             <ButtonBox>
                 <AddCardButton onClick={addCard}>추가</AddCardButton>
            </ButtonBox>
        </List>

        <List></List>
        <List></List>
        <List></List>
        <List></List>
    </Container>
  );
}

export default Kanban;

const Container = styled.div`
  display: flex;
 
`;

const List = styled.div`
    width: 20%;
    height: 70vh;

    border:1px solid #80808037;
`

const Card = styled.div`
    border:1px solid #80808037;
    margin: 1rem;
    padding: 0 1rem;
    cursor: pointer;
`

const P = styled.div`
    p{
        font-size: 0.7rem;
    }
`

const ButtonBox = styled.div`
    text-align: center;
`

const AddCardButton = styled.button`
    margin-top: 1rem;
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
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`