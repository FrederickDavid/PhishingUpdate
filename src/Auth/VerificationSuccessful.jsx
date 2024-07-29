import React from "react"
import { NavLink } from "react-router-dom"
import styled from "@emotion/styled"
import image from "../../images/Logo.png"

function Login() {
  return (
    <Container>
      <Wrapper>
        {" "}
        <Form>
          <HeadText>OTP VERIFICATION</HeadText>
          <BodyText>
            A 6 digit code has been sent to{" "}
            <span>muomaifefrederick61@gmil.com</span>
          </BodyText>
          <InputHolder>
            <Label>OTP</Label>
            <Input placeholder="Enter OTP Code" type="email" />
          </InputHolder>
          <Button>Verify</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login

const BottomRoute = styled(NavLink)`
  @media screen and (min-width: 320px) and (max-width: 500px) {
    text-decoration: none;
    color: #37a755;
    font-weight: 700;
  }
`

const BottomText = styled.div`
  @media screen and (min-width: 320px) and (max-width: 500px) {
    margin-top: 10px;
    font-size: 13px;
  }
`

const Button = styled.button`
  @media screen and (min-width: 320px) and (max-width: 500px) {
    width: 100%;
    height: 35px;
    background-color: #37a755;
    border-radius: 3px;
    color: white;
    border: none;
    margin-top: 10px;
  }
`

const Input = styled.input`
  @media screen and (min-width: 320px) and (max-width: 500px) {
    width: 95%;
    height: 35px;
    border: 1px solid green;
    border-radius: 3px;
    padding: 0px 5px;
  }
`
const Label = styled.label`
  @media screen and (min-width: 320px) and (max-width: 500px) {
    width: 100%;
    font-size: 13px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.8);
  }
`
const InputHolder = styled.div`
  @media screen and (min-width: 320px) and (max-width: 500px) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }
`

const Logo = styled.img`
  @media screen and (min-width: 320px) and (max-width: 500px) {
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const BodyText = styled.div`
  @media screen and (min-width: 320px) and (max-width: 500px) {
    margin-bottom: 50px;
    color: rgba(0, 0, 0, 0.9);
    text-align: center;
    font-size: 13px;
    font-weight: 600;
    line-height: 1.2;
  }
`

const HeadText = styled.div`
  @media screen and (min-width: 320px) and (max-width: 500px) {
    font-weight: 700;
    font-size: 25px;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
    color: rgba(0, 0, 0, 0.9);
  }
`

const Form = styled.form`
  @media screen and (min-width: 320px) and (max-width: 500px) {
    width: 94%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const Wrapper = styled.div`
  @media screen and (min-width: 320px) and (max-width: 400px) {
    width: 310px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 401px) and (max-width: 500px) {
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const Container = styled.div`
  @media screen and (min-width: 320px) and (max-width: 400px) {
    width: 310px;
    min-height: 100vh;
    display: flex;
    justify-content: center;
  }
  @media screen and (min-width: 401px) and (max-width: 500px) {
    width: 360px;
    height: 100dvh;
    display: flex;
    justify-content: center;
  }
`
