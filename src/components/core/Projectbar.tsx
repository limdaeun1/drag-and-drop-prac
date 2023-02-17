import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

import { IoIosArrowDown } from "react-icons/io";

import { useGet } from 'shared/http';



const Projectbar = () => {

  const projectData = useGet('http://192.168.20.24:8080/api/projects')


  return (
    <ProjectbarContainer>

        <Barheader>
          <input type='checkbox' checked={true}/><p>펼쳐보기</p>
        </Barheader>
      
        <ContentBox>
            {projectData?.content.map((project:{title:string, id:number; items:[]} , index:React.Key) => ( 
            <Content key={index}>
              <StyledLink  to={`/history?id=${project.id}`}>
                <Title>
                  <IoIosArrowDown/> {project.title}
                </Title>
              </StyledLink>
                    {project?.items.map((item:{title:string, id:number} , index:React.Key ) => (
                      <StyledLink to={`/item?id=${item.id}`} key={index}>
                        <ItemTitle><input type='checkbox'/><p>{item.title}</p></ItemTitle>
                      </StyledLink>
                    ))}
            </Content>
            ))}
        </ContentBox>

    </ProjectbarContainer>
  )
}

export default Projectbar

const ProjectbarContainer = styled.div`
    width: 20rem;
    height: calc(100vh - 3rem );

    margin-left: 0.5rem;

    border:1px solid #80808037;

    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

const Barheader = styled.div`
    height: 3rem;

    display: flex;

    background-color: #80808037;

    p{
      font-size: 0.7rem;
      line-height: 2.3;
    }
`

const ContentBox = styled.div`
`

const Content = styled.div`
  margin-bottom:1rem;

  border-top: 1px solid #80808037;
`

const Title = styled.div`
  height: 1.5rem;
  
  margin-left: 0.3rem;

  font-weight: 600;

  cursor: pointer;
`

const ItemTitle = styled.div`
  display: flex;
  line-height: 0.05;
  input{
  }
  p{
    margin-left: 2rem;
  }
  cursor: pointer;
  &:hover {
      background-color: rgb(0, 0, 0, 0.5);
      color: rgb(255, 255, 255, 100);
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`