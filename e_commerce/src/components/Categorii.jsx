import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
    background-color: white;
`
const Wrapper = styled.div`
    padding: 10px 25px;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;
`
const Left = styled.h1`
    flex: 1;
    align-items: center;
    display: flex;
    justify-content: center;
`
const Center = styled.h1`
    flex: 1;
    align-items: center;
    display: flex;
    justify-content: center;
`
const Right = styled.h1`
    flex: 1;
    align-items: center;
    display: flex;
    justify-content: center;
`

const Categorii = () => {
    return (
        <Container>
            <Wrapper>
                <Left>Telefoane mobile</Left>
                <Center>Laptop-uri</Center>
                <Right>Televizoare</Right>
            </Wrapper>
        </Container>
    )
}

export default Categorii
