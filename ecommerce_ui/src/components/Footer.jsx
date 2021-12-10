import { Facebook, Instagram, MailOutline, Phone, Room, Twitter, YouTube } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
`
const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;  
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>URMARESTE-NE</Logo>
                <Desc></Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999" >
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="d6249f">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <YouTube/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Ajutor si informatii</Title>
                <List>
                    <ListItem>Acasa</ListItem>
                    <ListItem>Cumparaturi</ListItem>
                    <ListItem>Contul meu</ListItem>
                    <ListItem>Politica de Confidentialitate</ListItem>
                    <ListItem>Termeni si conditii</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}}/>Targu-Jiu , Judetul Gorj
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/>+40 769 531 750
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}}/>contactoffice.ecommerce@gmail.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
}

export default Footer
