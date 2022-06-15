import React from "react"
import styled from "styled-components"
import {GoThreeBars} from "react-icons/go";
import {GiCancel} from "react-icons/gi";
import { Link } from "react-router-dom";
const Header =()=>{
    const [toggle, setToggle]=React.useState(false)
    const togglechange =()=>{
        setToggle(!toggle)
    }
    return(
        <Container>
            <Wrapper>
            <LogoDiv>
<Logo src="/Assets/images/logo.svg" alt=""/>
                </LogoDiv>
                <Navigation>
         
                <Navs>
                    <Nav to="/">
                        <Icon src="/Assets/images/home-icon.svg" />
                        <Span>Home</Span>
                    </Nav>
                    <Nav  to="/Search">
                        <Icon src="/Assets/images/search-icon.svg" />
                        <Span>Search</Span>
                    </Nav>
                    <Nav  to="/Movies">
                        <Icon src="/Assets/images/movie-icon.svg" />
                        <Span>Movies</Span>
                    </Nav>
                    <Nav  to="/Original">
                        <Icon src="/Assets/images/original-icon.svg" />
                        <Span>Original</Span>
                    </Nav>
                    <Nav  to="/Series">
                        <Icon src="/Assets/images/series-icon.svg" />
                        <Span>Series</Span>
                    </Nav>
                    {/* <Nav>
                        <Icon src="/Assets/images/2.png" />
                        <Span>Info</Span>
                    </Nav> */}
                </Navs>
                <Avatar>
                    <Avr src="/Assets/images/1.JPG" alt=""/>
                </Avatar>
                </Navigation>
            
<Menuhold>
   {toggle ?  <GoThreeBars onClick={togglechange} size="30px" color="#ffff"/>:
    <GiCancel  onClick={togglechange} size="30px" color="#ffff"/>}
</Menuhold>

            </Wrapper>
        </Container>
    )
}
export default Header
const Container = styled.div`
width:100%;
height:50px;
background:#123456;
display: flex;
justify-content:center;
align-items:center;
position: st;
`
const Wrapper = styled.div`
width:90%;
height:100%;
/* background:#000; */
display: flex;
justify-content:space-between;
align-items:center;
`
const Logo = styled.img`
width: 80px;
display: flex;
align-items:center;
`
const LogoDiv = styled.div`

`
const Navs = styled.div`
width: 68%;
height: 70px;
/* background: hotpink; */
display:flex;
align-items:center;
justify-content:space-between;
cursor:pointer;
`
const Nav = styled(Link)`
text-decoration: none;
display:flex;
`
const Navigation = styled.div`
width:65%;
display: flex;
justify-content:space-between;
/* background:red; */
@media screen and (max-width:768px){
    display:none
}
`
const Menuhold = styled.div`
display: none;
@media screen and (max-width:768px){
    display: block;
}
`
const Icon = styled.img`
width: 25px;
display: flex;
align-items:center;
/* background-color:blue; */
`
const Span = styled.div`
display: flex;
align-items:center;
margin-left:3px;
color: white;
font-size:18px;
font-weight:500;
position:relative;
::after{
    content:"";
    position:absolute;
    height:2px;
    background:white;
    left:0;
    right:0;
    bottom:-6px;
    opacity:0;
    transition:all 350ms;
}
:hover{
    ::after{
        opacity: 1;
    }
    transform:scale (1.1) ;
    transform:translateY(-15px);
    opacity:0.5;
    transition:1s;
    color:#aaaa;
    font-family:arvo;
}
`
const Avr = styled.img`
width:37px;
height: 37px;
border-radius:100%;
object-fit:cover;
cursor:pointer;
display: flex;
align-items:center;
`
const Avatar = styled.div`
display: flex;
align-items:center;
`