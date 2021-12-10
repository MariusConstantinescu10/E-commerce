import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter';

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) =>
        props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`
const TopTexts = styled.div`
  `

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 10px 10px;
`
const Info = styled.div`
    flex: 3;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
`

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`

const Image = styled.img`
    width: 200px;
`

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
`

const ProductMemory = styled.span``;


const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
`

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "24px"};
`

const SummaryItemText = styled.span`
`

const SummaryItemPrice = styled.span`
`

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
`

const Cart = () => {
    return (
        <Container>
            <Navbar/>
            <Wrapper>
                <Title>COSUL MEU</Title>
                <Top>
                    <TopButton>CONTINUA CUMPARATURILE</TopButton>
                        <TopTexts>
                            <TopText>Cosul de cumparaturi(2)</TopText>
                            <TopText>Favorite</TopText>
                        </TopTexts>
                    <TopButton type="filled">VERIFICA ACUM</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://www.notebookcheck.net/uploads/tx_nbc2/SamsungGalaxyA72.jpg"/>
                                <Details>
                                    <ProductName><b>Produs:</b>Samsung Galaxy A72</ProductName>
                                    <ProductId><b>ID:</b> 0001 </ProductId>
                                    <ProductColor color="black"/>
                                    <ProductMemory><b>Memory:</b>128 GB</ProductMemory>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>1</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>4.439 LEI</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image src="https://lcdn.altex.ro/media/catalog/product/T/e/Telefon_APPLE_iPhone_13_mini_5G_128GB_Pink_4_.jpg"/>
                                <Details>
                                    <ProductName><b>Produs:</b>iPhone 13 mini</ProductName>
                                    <ProductId><b>ID:</b> 0002 </ProductId>
                                    <ProductColor color="pink"/>
                                    <ProductMemory><b>Memory:</b>128 GB</ProductMemory>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>1</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>3.949 LEI</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>Sumar comanda</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Cost produse</SummaryItemText>
                            <SummaryItemPrice>8.499 LEI</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Cost livrare</SummaryItemText>
                            <SummaryItemPrice color="green">Gratuit</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>8.499 LEI</SummaryItemPrice>
                        </SummaryItem>
                        <Button>Continua</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Cart
