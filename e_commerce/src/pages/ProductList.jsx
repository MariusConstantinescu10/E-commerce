import styled from "styled-components"
import Navbar from "../components/Navbar"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

const Container = styled.div`
`
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`  
    margin: 20px;
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`

const Option = styled.option`
`

const ProdusctList = () => {
    return (
        <Container>
            <Navbar/>
            <Title>Telefoane mobile</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filtre produse:</FilterText>
                    <Select>
                        <Option dezactivati selectarea>
                            Pret
                        </Option>
                        <Option> 500 - 1000</Option>
                        <Option>1000 - 1500</Option>
                        <Option>1500 - 2000</Option>
                        <Option>2000 - 2500</Option>
                        <Option>2500 - 3000</Option>
                        <Option>3000 - 3500</Option>
                        <Option>3500 - 4000</Option>
                    </Select>
                    <Select>
                        <Option dezactivati selectarea>
                            Brand
                        </Option>
                        <Option>Apple</Option>
                        <Option>Huawei</Option>
                        <Option>Nokia</Option>
                        <Option>OPPO</Option>
                        <Option>Samsung</Option>                      
                        <Option>Xiaomi</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sorteaza dupa:</FilterText>
                    <Select>
                        <Option selected>Cel mai nou</Option>
                        <Option>Pret crescator</Option>
                        <Option>Pret descrescator</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProdusctList
