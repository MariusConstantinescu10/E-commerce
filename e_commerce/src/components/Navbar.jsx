import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    height: 60px;
    background-color: black;
`
const Wrapper = styled.div`
    padding: 10px 25px;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Left = styled.div`
    flex: 1;
    align-items: center;
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;    
    display: flex;
    margin-left: 25px;
    padding: 5px;
    background-color: white;
`
const Input = styled.input `
    border: none;
    border-color: white;
    flex: 1;
`

const Center = styled.div`
   flex: 1;
   text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
`

const Right = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
   justify-content: flex-end;
`
const MenuItem = styled.div`
    font-size: 16px;
    font-style: bold;
    cursor: pointer;
    margin-left: 30px;
`


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <SearchContainer>
                        <Input placeholder="Cauta branduri, categorii sau produse"/>
                        <Search style={{ color: "black", fontSize: 20 }}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>E-commerce</Logo>
                </Center>
                <Right>
                    <MenuItem>Conectare</MenuItem>
                    <MenuItem>Contul meu</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                             <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>  
    )
}

export default Navbar
