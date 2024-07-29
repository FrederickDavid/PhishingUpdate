import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { AppState } from "../States/Global";
import axios from "axios";

function AllUserPage() {
  const [data, setData] = useState();

  const getUsers = async () => {
    await axios
      .get("https://phishing-backend-u88a.onrender.com/api/users")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        // alert("User Token as Expire")
        console.log(error.message);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  console.log(data);
  return (
    <Container>
      <h1>ALL SIGNED IN USERS</h1>
      <Wrapper>
        {data?.map((props) => (
          <SmallCard key={props.id}>
            <SmallCardImage>{props.userName?.charAt(0)}</SmallCardImage>
            <SmallCardText>{props.userName}</SmallCardText>
            <SmallCardText2>{props.email}</SmallCardText2>
            <SmallCardText2>{props.phoneNo}</SmallCardText2>
            <SmallCardText2>{props.address}</SmallCardText2>
          </SmallCard>
        ))}
      </Wrapper>
    </Container>
  );
}

export default AllUserPage;

const SmallCardText2 = styled.div`
  font-weight: bold;
  font-size: 15px;
  text-align: center;
  line-height: 1.1;
  color: rgba(0, 0, 0, 0.8);
`;
const SmallCardText = styled.div`
  font-weight: 700;
  font-size: 25px;
  text-align: center;
  line-height: 1.1;
  margin: 10px 0px;
  color: rgba(0, 0, 0, 0.8);
`;

const SmallCardImage = styled.div`
  width: 100px;
  height: 100px;
  background-color: lightgray;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  font-size: 50px;
`;

const SmallCard = styled.div`
  text-decoration: none;
  width: auto;
  margin: 10px;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Wrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
