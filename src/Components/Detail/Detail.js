import React from "react"
import { Link ,useParams} from "react-router-dom"
import styled from "styled-components"
import data from "../Data.json"

const Detail = ()=>{
    const {id} = useParams();
    console.log(data[id-1]);
    const newID = data[id-1];
    console.log("new id",newID);
    return(
<Container to="/Detail">
{   
<div>
<Background>
<img src={newID.backgroundImg}/>
    </Background>
    <LogoImg>
<img src={newID.titleImg}/>
      
    </LogoImg>
    <Description2>{newID.subTitle}</Description2>
<Description>{newID.description}</Description>
   
</div>
    }
    <Prev to="/">Back</Prev>
</Container>
    )
}
export default Detail

const Container = styled(Link)`
position: relative;
display: block;
`
const Prev = styled(Link)`
color:black;
text-decoration: none;
width: 70px;
height: 40px;
display: flex;
align-items:center;
justify-content: center;
background-color: white;
margin: 0 10px;
border-radius: 2px;
text-transform: uppercase;
font-weight: 700;
font-size: 13px;
margin-top: 20px;

`
const Background = styled.div`
position:fixed;
top:0;
right:0;
left:0;
z-index:-1;
opacity:1;

`
const LogoImg = styled.div`
img {
    width: 300px;
    height: 300px;
}
`
const Description = styled.div`
margin-top: 50px;
color:white;
text-decoration: none;
width: 550px;

`
const Description2 = styled.div`
margin-top: 20px;
color:white;
`


