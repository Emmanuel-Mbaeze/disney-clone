import React from "react";
import Styled from "styled-components"
import Recommendation from "../Recommendation/Recommendation";
import Slide from "../Slider/Slider";
import Viewers from "../Viewers/Viewers"
const Home=()=>{
    return(
        <Container>
            <Slide/>
            <Viewers/>
            <Recommendation/>
            </Container>
    )
}
export default Home
const Container = Styled.div`
height: 100%;
min-height:100vh;
width: 100%;
position:relative;
:before{
    content: "";
    position: absolute;
    top:0;
    bottom:0;
    right:0;
    left:0;
    background-image:url("/Assets/images/home-background.png");
    background-repeat: no-repeat;
    background-postion: center;
    background-size: cover;
    z-index: -1;
}
`