import React ,{useState} from 'react'
import styled from 'styled-components'
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import ProjectDesc from './ProjectDesc';
import ReportsBox from './ReportsBox';
import Button from '@mui/material/Button';

import { useGet, post } from 'shared/http';

const History = () => {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const [content, setContent] = useState<string>();

  const id = searchParams.get("id")

 
  const historyData = useGet(`http://192.168.20.24:8080/api/projects/${id}`)
  console.log(historyData)

  const onSubmit = () => {
    const data = {
        content: content,
        project:{
          id:id
        },
        // user:{
        //   id:1
        // }
    }

    post(
        'http://192.168.20.24:8080/api/reports',
        data,
        dispatch,
      )
    
    
}
  



  return (
    <HistoryContainer>
        <HistoryHeader>
            <HistoryNamebox></HistoryNamebox>
        </HistoryHeader>

        <ContenContainer>
            <ProjectContainer>
                <ProjectDesc/>

                {/* {historyData?.title}
                {historyData?.description}
                
                
                {historyData?.assigners.map((assigner:{user:any},index:React.Key) => (
                <Assigner key={index}>{assigner.user?.name}</Assigner>
                ))} */}
            </ProjectContainer>

            <ContentBox>
              <ReportsBox historyData={historyData}/>
            </ContentBox>

            <InputContainer>
                  <Input onChange={(e) => setContent(e.target.value)}/>
                  <Button onClick={onSubmit} variant="contained">save</Button>
               
            </InputContainer>
        
          </ContenContainer>
    </HistoryContainer>
  )
}

export default History

const HistoryContainer = styled.div`
  width: calc(100% - 22rem);

  margin:0 0.2rem;
  
  border:1px solid #80808037;
`

const HistoryHeader = styled.div`
  height: 3rem;

  display: flex;
  align-items: center;

  background-color: #80808037;
`

const HistoryNamebox = styled.div`
  width: 100%;
  height: 2.9rem;

  background-color: #dbd8d837;
`

const ContenContainer = styled.div`
  min-height: 50rem;

  margin: 1rem;
`

const Assigner = styled.div`
  border: 1px solid black;
`

const ProjectContainer = styled.div`
  min-height: 5rem;

  
`

const ContentBox = styled.div`
  min-height: 10rem;
  
  margin-top: 2rem;
`

const InputContainer = styled.div`
  
`

const Input = styled.input`
  
`