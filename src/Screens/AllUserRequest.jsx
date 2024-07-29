import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import { useNavigate } from "react-router-dom"
import Tab from "./Screens/BottomTab/Tab"
import image2 from "../../images/paper.jpg"
import { AppState } from "../States/Global"
import axios from "axios"

function AllUserRequest() {
  const { user } = React.useContext(AppState)
  const navigate = useNavigate()

  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const getPickup = async () => {
    await axios
      .get("https://recycle-back-end.onrender.com/api/pickup")
      .then((res) => {
        setData(res.data.data)
      })
      .catch((error) => {
        // alert("User Token as Expire")
        console.log(error.message)
      })
  }
  const DeletePickup = async (id) => {
    setIsLoading(true)
    console.log(id)
    await axios
      .delete("https://recycle-back-end.onrender.com/api/pickup/delete/" + id, {
        status: "confirm",
        notifyUser: true,
        notifyAdmin: false,
      })
      .then(() => {
        alert("Pickup Deleted")
        navigate('/userHome')
        setIsLoading(false)
      })
      .catch((error) => {
        // alert("User Token as Expire")
        console.log(error.message)
      })
  }

  const filteredData = data?.filter((el) => el.user === user?._id)
  
  useEffect(() => {
    getPickup()
  }, [])

  return (
    <Container>
      <Body>
        <Card>
          <SmallCardHolder>
            {filteredData?.map((props) => (
              <SmallCard key={props?._id}>
                <Image src={image2} />
                <SmallCardText>{props?.address}</SmallCardText>
                <SmallCardText>
                  Day of Pick-up: <span>{props?.pickupDate}</span>
                </SmallCardText>
                <button disabled={isLoading} onClick={()=>DeletePickup(props?._id)}>
                  {" "}
                  {isLoading ? "Loading..." : "Delete"}
                </button>
              </SmallCard>
            ))}
          </SmallCardHolder>
        </Card>
      </Body>
      <NavHolder>
        <Tab />
      </NavHolder>
    </Container>
  )
}

export default AllUserRequest

const SmallCardText = styled.div`
  width: 90%;
  font-weight: 700;
  text-align: center;
  font-size: 12px;
  line-height: 1.1;
  margin-top: 20px;
  color: rgba(0, 0, 0, 0.8);
`

const Image = styled.img`
  width: 90%;
  height: 60%;
  margin-top: 20px;
`

const SmallCard = styled.div`
  text-decoration: none;
  width: 240px;
  margin: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    button {
    padding: 10px 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: #37a755;
    color: white;
  }
`

const SmallCardHolder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
  overflow-y: auto;

  @media (max-width: 360px) {
    height: calc(350px - 70px);
  }
`

const NavHolder = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`
const Card = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  @media screen and (min-width: 320px) and (max-width: 400px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media screen and (min-width: 401px) and (max-width: 500px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
