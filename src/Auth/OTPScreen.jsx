import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import axios from "axios";

function OTPScreen({ navigation }) {
  const [OTP, setOTP] = useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();

  const id = localStorage.getItem("otpId");

  const handleSubmit = async (event) => {
    if (event) event.preventDefault();
    setIsLoading(true);
    await axios
      .patch("https://recycle-back-end.onrender.com/api/users/verify/" + id, {
        otp: OTP,
      })
      .then(() => {
        navigate("/login");
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Wrapper>
        {" "}
        <Form onSubmit={handleSubmit}>
          <HeadText>OTP VERIFICATION</HeadText>
          <BodyText>
            A 6 digit code was sent to <span>Email</span>
          </BodyText>
          <InputHolder>
            <Label>OTP</Label>
            <Input
              placeholder="Enter OTP code"
              value={OTP}
              onChange={(e) => setOTP(e.target.value)}
              type="number"
            />
          </InputHolder>
          <Button onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? "Loading..." : "Proceed"}
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default OTPScreen;
const Button = styled.button`
  width: 98%;
  height: 35px;
  background-color: #37a755;
  border-radius: 3px;
  color: white;
  border: none;
  margin-top: 10px;
`;

const Input = styled.input`
  width: 95%;
  height: 35px;
  border: 1px solid green;
  border-radius: 3px;
  padding: 0px 5px;
`;
const Label = styled.label`
  width: 98%;
  font-size: 13px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.8);
`;
const InputHolder = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const BodyText = styled.div`
  width: 60%;
  text-align: center;
  line-height: 1.2;
  margin-bottom: 50px;
  font-size: 13px;
  font-weight: 600;
`;

const HeadText = styled.div`
  width: 90%;
  font-weight: 700;
  font-size: 25px;
  color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  width: 94%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 310px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 310px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;
