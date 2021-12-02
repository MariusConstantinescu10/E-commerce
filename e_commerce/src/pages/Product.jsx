import styled from "styled-components"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { Add, Remove } from "@material-ui/icons"


const Container = styled.div`
`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImgContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 80%;
    height: 80vh;
    object-fit: cover;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`

const Title = styled.h1`
    font-weight: 200;
`

const Desc = styled.p`
    margin: 90px 0px;
`

const Pret = styled.span`
    font-weight: 100;
    font-size: 40px;
`
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 20px 5px;
    cursor: pointer;
    border-color: black;
`

const FilterMemory = styled.select`
    margin-left: 10px;
    padding: 5px;
`

const FilterMemoryOption = styled.option``

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const Button = styled.button`
    padding: 15px;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    &:hover{
        background-color: #f8f4f4;
    }
`

const Product = () => {
    return (
        <Container>
            <Navbar/>
            <Wrapper>
                <ImgContainer>
                    <Image src="https://www.notebookcheck.net/uploads/tx_nbc2/SamsungGalaxyA72.jpg"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Telefon SAMSUNG Galaxy A72, 128GB, 6GB RAM, Dual SIM, Awesome Black</Title>
                    <Desc>Supradimensioneaza-ti vizualizarea cu ecranul captivant Infinity-O de 6.7 inci. Un afisaj FHD+ Super AMOLED, atinge 800 de nits pentru claritate, chiar si in lumina puternica a zilei. In plus, Eye Comfort Shield scade lumina albastra, iar Real Smooth pastreaza vizualizarea cursiva, indiferent daca te joci sau derulezi.
                    Utilizeaza rezolutia foarte inalta a camerei foto principale, de 64MP, cu OIS pentru fotografii detaliate si clare pe tot parcursul zilei. Extinde-ti unghiul de vizualizare cu ajutorul camerei foto Ultra Wide. Si parcurge distante noi cu 3x zoom optic si 30X Space Zoom al camerei foto cu teleobiectiv si OIS.
                    </Desc>
                    <Pret>Pret: 3.599 LEI </Pret>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="gray"></FilterColor>
                            <FilterColor color="blue"></FilterColor>
                            <FilterColor color="red"></FilterColor>
                        </Filter>
                        <Filter>
                            <FilterTitle>Memory</FilterTitle>
                            <FilterMemory>
                                <FilterMemoryOption>128 GB</FilterMemoryOption>
                                <FilterMemoryOption>256 GB</FilterMemoryOption>
                                <FilterMemoryOption>512 GB</FilterMemoryOption>
                            </FilterMemory>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>Adauga in cos</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product
