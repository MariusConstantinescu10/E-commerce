import styled from "styled-components"
import Navbar from "../components/Navbar"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { useLocation } from "react-router"
import { useState } from "react"

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
    const location = useLocation();
    const cat = (location.pathname.split("/")[2])
    const [filters,setFilters] = useState({})
    const [sort, setSort] = useState("nou")

    const handleFilters = (e) =>{
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };

    return (
        <Container>
            <Navbar/>
            <Title>Telefoane mobile</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filtre produse:</FilterText>
                    <Select name="pret" onChange={handleFilters}>
                        <Option dezactivati>
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
                    <Select name="brand" onChange={handleFilters}>
                        <Option dezactivati>
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
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option value="nou">Cel mai nou</Option>
                        <Option value="cres">Pret crescator</Option>
                        <Option value="desc">Pret descrescator</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort}/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProdusctList
