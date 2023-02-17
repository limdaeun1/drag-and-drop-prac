import React from 'react'
import styled from 'styled-components'

const ProjectDesc = () => {
  return (
    <>  
        <Layout>
           <Div2>
                <P1>Project Title</P1>
                <TitleDiv>
                    Project Name
                </TitleDiv>
           </Div2>

           <Div2>
                <P1>Project Desc</P1>
                <TitleDiv>
                    프로젝트 내용
                </TitleDiv>
           </Div2>

           <Div2>
                <P1>Assigner</P1>
                <TitleDiv>
                    <AssignerBox>
                        ID1
                    </AssignerBox>
                </TitleDiv>
           </Div2>

        </Layout>
    </>
  )
}

export default ProjectDesc

const Div1 = styled.div`
    display: flex;

    margin-top: 0.5rem;
`
const TitleBox = styled.div`
    border-radius: 0.3rem;

    background-color: #1834cecf;
`
const P1 = styled.p`
    font-size: 0.8rem;
    color: white;
    margin: 0.5rem; line-height: 110%;
`

const DescBox = styled.div`
    margin-left: 1rem;
    p{
        font-size: 0.8rem;
        margin: 0rem; line-height: 230%;
    }
`

const Layout = styled.div`
    
`
const Div2 = styled.div`
    margin-top: 1rem;
    p{
        font-size: 0.2rem;
        font-weight: 500;
        color: blue
    }
`

const TitleDiv = styled.div`
    margin-top: 0.6rem;
    margin-left: 0.5rem;
    /* border-bottom:1px solid #b2b2b8cf */
`

const AssignerBox = styled.div`
    display:inline-block;
    border-radius: 0.2rem;
    background-color: #5758584b;
    font-size: 0.7rem;
    padding: 0.3rem;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    
`