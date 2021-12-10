import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 100px;
`
const Wrapper = styled.h1`
    padding: 30px 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    display: flex;
    font-size: 30px;
`

const FavoriteProducts = () => {
    return (
        <Container>
            <Wrapper>Produse favorite</Wrapper>
        </Container>
    )
}

export default FavoriteProducts
