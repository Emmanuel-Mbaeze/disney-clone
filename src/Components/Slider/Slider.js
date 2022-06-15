import React from "react";
import Styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import  "slick-carousel/slick/slick-theme.css";
const Slide =()=>{
    const settings ={
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
    }
    return(
        <Container {...settings}>
                {/* <Wrap>
<a>
<img src="/Assets/images/3.jpg"/>

</a>
    </Wrap> */}
    <Wrap>
<a>
<img src="/Assets/images/slider-badag.jpg"/>

</a>
    </Wrap>
    <Wrap>
<a>

<img src="/Assets/images/slider-badging.jpg"/>

</a>
    </Wrap>
    <Wrap>
<a>

<img src="/Assets/images/slider-scale.jpg"/>

</a>
    </Wrap>
    <Wrap>
<a>

<img src="/Assets/images/slider-scales.jpg"/>
</a>
    </Wrap>
</Container>
    )
}
export default Slide
const Container = Styled (Slider)`
margin-top: 5px;

@media (max-width: 768px) {
    // margin-top: -4px;
  }


& > button {
  opacity: 0;
  height: 100%;
  width: 5vw;
  // z-index: 1;

  &:hover {
    opacity: 1;
    transition: opacity 0.2s ease 0s;
  }
}
ul li button{
    &:before{
        font-size:10px;
        color:rgb(150,158,171) ;
    }
 
}

li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: hidden;
  }

  .slick-prev {
    left: 75px;
  }

  .slick-next {
    right: 25px;
  }
`;


const Wrap = Styled.div`
border-radius:4px ;
cursor:pointer ;
position:relative ;
a{
    border-radius:4px ;
 
      box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor:pointer ;
    display:block ;
    position:relative ;
    padding: 4px;
}
img{
    width: 100%;
    // height: 100%;
   
}
`