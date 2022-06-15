import React from "react"
import Styled from "styled-components"
import data from "../Data.json"
import { Link } from "react-router-dom"
const Recommendation = ()=>{
    return(
        <Container>
            <h3><strong>Recommended for you</strong></h3>
            <Wrapper>
                {data?.map((props)=>(
                        <Main key={props.id1} to={`/detail/${props.id1}`}>
                            <img src={props.cardImg} alt=""/>
                        </Main>
                ))}
            </Wrapper>
        </Container>
        
    )
}
export default Recommendation
const Container = Styled.div`
width: 100%;
display: flex;
justify-content:center;
flex-direction: column;
`
const Wrapper = Styled.div`
width: 100%;
margin-top: 20px;
display: grid;
  grid-gap: 20px;
  gap: 20px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    
  }
`
const Main = Styled(Link)`
height: 200px;
width: 305px;
border-radius: 5px;

:hover{
    border: 2px solid white;
    transition: all 400ms;
    transform: scale(1.05);
    cursor: pointer;
}
img {
    height: 100%;
    width: 100%;
    object-fit:cover;
    border-radius: 5px;
}
`