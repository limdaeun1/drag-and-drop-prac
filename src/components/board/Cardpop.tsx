import { useEffect, useState } from 'react';
import { useLocation, useNavigate , useSearchParams} from 'react-router-dom';
import styled from 'styled-components';
import { useGet } from 'shared/http';

const Cardpop = () => {
    const [pathname, setPathname] = useState('/');
    const location = useLocation();
    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id")
   
    const cardData = useGet(`http://192.168.20.24:8080/api/cards/${id}`)
    console.log(cardData)

    useEffect(() => {
        setPathname(location.pathname);
    }, [location.pathname]);

    if (pathname !== '/card') {
        return null;
    }
 
    const changestatus = () => {

    }

  return (
    <>
        <Background onClick={() => navigate(-1)}></Background>
        <ModalContainer>

            <Container>
                <CardTitle>{cardData?.title}</CardTitle>
                <StatusBox>{cardData?.status}</StatusBox>
                <Duedate>{cardData?.dueDate}</Duedate>

                <AssignerBox>Assigner :
                    {cardData?.assigners.map((as:any,index:any)=> (
                    <div>{as.user.auth}</div> 
                    ))}
                </AssignerBox>

                <AssigneeBox>Assignee :
                    {cardData?.assignees.map((as:any,index:any)=> (
                    <div>{as.user.auth}</div> 
                    ))}
                </AssigneeBox>

                <ContentBox>
                    {cardData?.description}
                </ContentBox>

                <TaskBox>
                    <TaskTitle>Tasks</TaskTitle>
                    {cardData?.tasks.map((task:any,index:any)=> (
                    <div>{task.content}</div>  
                    ))} 
                </TaskBox>
                <EditCardButton onClick={changestatus}>수정</EditCardButton>
            </Container>

        
        </ModalContainer>
    </>
  )
}

export default Cardpop

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

const Container = styled.div`
    width: 30rem;
    height: auto;

    text-align: center;
    flex-direction: column;
`

const CardTitle = styled.div`
    font-size: 2rem;
`

const StatusBox = styled.div`
    font-size: 1rem;
    margin: 0.3rem;
`

const Duedate = styled.div`
    color: gray;
`

const AssignerBox = styled.div`
    display: flex;

    margin-top: 2rem;
    div{
        font-size: 0.8rem;
        line-height: 1.5;
        margin: 0 0.5rem;
    }
`

const AssigneeBox = styled.div`
    display: flex;
    margin-bottom: 5rem;
    div{
        font-size: 0.8rem;
        line-height: 1.5;
        margin: 0 0.5rem;
    }
`

const ContentBox = styled.div`
`

const TaskTitle = styled.h4`
    
`

const TaskBox = styled.div`
`

const EditCardButton = styled.button`
    height: 1.5rem;
    font-size: 0.7rem;
    font-weight: 500;

    margin-top: 5rem;
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