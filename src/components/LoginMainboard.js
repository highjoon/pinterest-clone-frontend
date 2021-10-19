import React, {useState} from 'react'
import styled, { keyframes } from "styled-components";
import Pin from './Pin'
import {FaAngleDown} from "react-icons/fa";
import {Text} from '../elements'
import SignupCard from './SignupCard';
const LoginMainboard = (props) => {
    let {pins} = props;
    const [viewLogin, setViewLogin] = useState(false);
    const scrollToBottom = () =>{
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
           
        });
        setViewLogin(true)
    }
        

   
    return ( <div>
             <MainPost>
                 <PostOne>
                  다음
                 </PostOne>
                 <PostTwo>
                식사 메뉴 아이디어를 찾아보세요
                 </PostTwo>
                 </MainPost>
           <Wrapper>
            <Container>
               {
                   pins.map((pin,index)=> {
                       let {urls} = pin;
                      return  <Pin key={index} urls={urls} />
                   })
               }
            </Container>

        </Wrapper> 
        {
            viewLogin&&<Drapper>
            <FlexBox
                style={{
                    transform: `translateY(40px)`,
                   
                }}
            >
                <div
                style={
                    {
                        fontSize:"40px",
                        margin:"7px 0px 1.8px 3.6px",
                        color:'#fff',
                        fontWeight:'700',
                    }
                }
                   
                >
                    가입하여 더 많은 아이디어를
                    <br /> 만나보세요
                </div>
               <SignupCard/>
            </FlexBox>
            <Back
                style={{
                
                }}
            />
        </Drapper>
        }
        <ScrollBtn onClick={scrollToBottom }>
             <FaAngleDown size="30"/>
             </ScrollBtn> 
    </div>
      
    )
}

export default LoginMainboard;
const Drapper = styled.div`
	position: absolute;
	overflow: hidden;
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Back = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 0;
	background-color: #000;
`;

const FlexBox = styled.div`
	position: absolute;
	overflow: hidden;
	width: 1318px;
	display: flex;
	justify-content: space-between;
	z-index: 9999;
`;


const Wrapper = styled.div
`
background-color: white;
display: flex;
justify-content: center;
width: 100%;
height: 100%;
margin-top: 15px;
`

const Container = styled.div
`

column-count: 5;
column-gap:  10px;

height: 100%;
background-color: white;
margin: 0 auto;
max-width: 1260px;

`

const MainPost = styled.div
`
display:flex-inline;
justify-content:center;
text-align:center;
margin-top:120px;
margin-bottom: 80px;
`

const PostOne = styled.div
`
width:100%;
font-size:60px;
font-weight:900px;
`
const PostTwo = styled.div
`
width:100%;
font-size:60px;
font-weight:900px;
color: #c28b00;
`

const BoxFloat = keyframes
`
    from {
        transform: translateY(10px);
    }
    to {
        transform: translateY(-5px)
    }
`

const ScrollBtn = styled.div
`
position:fixed;
bottom: 12px;
left: 50%;
width: 60px;
height: 60px;
border-radius: 100%;
background-color:red;
text-align:center;
display:flex;
align-items:center;
justify-content:center;
color: #fff;
z-index: 1;
animation: ${BoxFloat} 1s 0.5s infinite linear alternate;
&:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }

`
