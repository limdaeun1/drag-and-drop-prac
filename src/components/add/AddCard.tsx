import React , { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'

import Text from 'components/ui/Text';
import SelectBox from 'components/ui/SelectBox';
import Button from '@mui/material/Button';

import { useGet , post } from 'shared/http';


interface ProjectObj {
    title: string
    description: string
}

const defaultProjectObj: ProjectObj = {
    title: '',
    description: '',
}



const AddCard = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const userData = useGet('http://192.168.20.24:8080/api/users')

    const [project, setProject] = useState(defaultProjectObj)
    const [assigner, setAssigner] = useState()
 
    const onChangeSelect = (event : any, child: any) => {
        setAssigner(event.target.value);
    };

    const onSubmit = () => {
        const data = {
            title:project.title,
            description:project.description,
            projectAssigners:[
                {
                    user:{
                        id:assigner
                    }
                }
            ]
        }

        post(
            'http://192.168.20.24:8080/api/projects',
            data,
            dispatch,
          )
        
        navigate(-1);
        
    }

    return (
        <Container>
        
            <TitleBox>
                <Text
                    index='title'
                    state={project}
                    setState={setProject}
                />
            </TitleBox>

            <DescBox>
                <Text
                    index='description'
                    state={project}
                    setState={setProject}
                />
            </DescBox>

            <AssignerBox>
                <SelectBox 
                    onChange={onChangeSelect}
                    userData={userData} 
                />
            </AssignerBox>

            <ButtonBox>
                <Button 
                    onClick={onSubmit} title='save' variant="contained">Save</Button>
            </ButtonBox>
    
        </Container>
    )
}

export default AddCard

const Container = styled.div`
    width: 30rem;
    height: auto;

    text-align: center;
    flex-direction: column;
`

const TitleBox = styled.div`
`


const DescBox = styled.div`
    margin-top: 4rem;
`

const AssignerBox = styled.div`
    float:left;

    margin-left: 2rem;
    margin-top: 3rem;
`

const ButtonBox = styled.div`
    margin: auto;
    margin-top: 15rem;
`