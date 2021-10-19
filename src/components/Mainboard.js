import React from 'react'
import styled from 'styled-components'
import Pin from './Pin'
import { useHistory } from 'react-router'
const Mainboard = (props) => {
    let {pins} = props;
    let history = useHistory()
    return (
        <Wrapper>
            <Container>
               {
                   pins.map((pin,index)=> {
                       let {urls} = pin;
                      return (
                          <div onClick={()=> {
                            history.push(`/detail/${index}`)
                        }}><Pin key={index} urls={urls}  />
                              </div>
                      ) 
                   })
               }
            </Container>
         <FloatButton >?</FloatButton>
         <GloatButton onClick={()=> {history.push('/addpin')}}>+</GloatButton>
        </Wrapper>
    )
}

export default Mainboard;

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

const FloatButton = styled.button`
  width: 50px;
  height: 50px;
  
  color: #ffffff;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 800;
  position: fixed;
  bottom: 50px;
  right: 30px;
  text-align: center;
  vertical-align: middle;
  border: none;
  border-radius: 50px;
  &:hover{
      cursor:pointer;
  }
`;
const GloatButton = styled.button`
  width: 50px;
  height: 50px;
 
  background-size:cover;
  color: #ffffff;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 800;
  position: fixed;
  bottom:110px;
  right: 30px;
  text-align: center;
  vertical-align: middle;
  border: none;
  border-radius: 50px;
  &:hover{
      cursor:pointer;
  }
`;