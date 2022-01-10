import { Link } from "react-router-dom";
import styled from "styled-components";


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        ),
        url("https://png.pngtree.com/thumb_back/fh260/background/20191215/pngtree-modern-double-colors-neon-lights-on-brick-background-image_324803.jpg")
        center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`

const Redirection = styled.a`
    margin: 10px 0px;
    font-size: 15px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Logati-va</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="parola" />
          <Button>LOGIN</Button>
          <Redirection>V-ati uitat parola?</Redirection>
          <Link to="/register" style={{ color: 'black'}}>
            <Redirection>Creati un nou cont</Redirection>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;