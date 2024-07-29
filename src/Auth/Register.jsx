import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import axios from "axios";

function Register() {
  const [values, setValues] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();
  const handleChange = (event) => {
    event.persist();
    let name = event.target.name;
    let val = event.target.value;

    setValues({
      ...values,
      [name]: val,
    });
  };

  const handleSubmit = async (event) => {
    if (event) event.preventDefault();
    setIsLoading(true);
    await axios
      .post(
        "https://phishing-backend-u88a.onrender.com/api/users/signup",
        values
      )
      .then((res) => {
        navigate("/otp");
        localStorage.setItem("otpId", res.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // console.log(values)
  return (
    <Container>
      <Wrapper>
        <h1>REGISTER</h1>{" "}
        <Form onSubmit={handleSubmit}>
          <InputHolder>
            <Label>Name</Label>
            <Input
              placeholder="Enter your name"
              type="text"
              name="userName"
              onChange={handleChange}
            />
          </InputHolder>
          <InputHolder>
            <Label>Email</Label>
            <Input
              placeholder="Enter your email"
              type="email"
              name="email"
              onChange={handleChange}
            />
          </InputHolder>
          <InputHolder>
            <Label>Address</Label>
            <Input
              placeholder="Enter your address"
              type="text"
              name="address"
              onChange={handleChange}
            />
          </InputHolder>
          <InputHolder>
            <Label>Phone Number</Label>
            <Input
              placeholder="Enter your phone number"
              type="text"
              name="phoneNo"
              onChange={handleChange}
            />
          </InputHolder>
          <InputHolder>
            <Label>Password</Label>
            <Input
              placeholder="Enter your password"
              type="password"
              name="password"
              onChange={handleChange}
            />
          </InputHolder>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "Register"}
          </Button>
        </Form>
        <BottomText>
          Already have an account<BottomRoute to="/login"> Login</BottomRoute>
        </BottomText>
      </Wrapper>
    </Container>
  );
}

export default Register;

const BottomRoute = styled(NavLink)`
  text-decoration: none;
  color: #37a755;
  font-weight: 700;
`;

const BottomText = styled.div`
  margin-top: 10px;
  font-size: 13px;
`;

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
  margin-bottom: 15px;
`;

const Form = styled.form`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
