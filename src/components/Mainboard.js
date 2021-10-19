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

