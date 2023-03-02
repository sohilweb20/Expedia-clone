import React from "react";
import styled from "styled-components";
import styles from "./First.module.css";

import { MdModeEditOutline } from "react-icons/md";
import { BiMerge } from "react-icons/bi";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
// import { MdMonetizationOn } from "react-icons/fa";
// import { HiOutlineChatAlt2 } from "react-icons/fa";
import { Box, Button, Grid, GridItem, Image } from "@chakra-ui/react";

export default function Options() {
  const firstimg = [
    {
      url: "https://forever.travel-assets.com/flex/flexmanager/images/2021/11/18/ORB_Blog_NationalParks_imgB_1199x399_20211117.jpg",
      title: "National Parks",
      dis: "There's plenty to keep you busy.",
      btnname: "Learn more",
      btnurl: "",
    },
    {
      url: "https://forever.travel-assets.com/flex/flexmanager/images/2021/11/18/ORB_Blog_RoadTrips_imgB_1199x399_20211117.jpg",
      title: "The perfect road trip",
      dis: "Find an adventure for every season.",
      btnname: "Read on",
      btnurl: "",
    },
  ];

  const secimag =
    "https://tpc.googlesyndication.com/simgad/10056509806482740393?";

  return (
    <MainCont>
      <Cont>
        <Heading>
          <h3>Here to help keep you on the move</h3>
        </Heading>
        <ImgCont>
          <CardCont>
            <Card>
              <Left>
                <Title>
                  <h2>Change or cancle a trip</h2> <br />
                </Title>
                <Para>
                  <p>Make updates to your itinerary or cancle a booking</p>{" "}
                  <br />
                </Para>
              </Left>
              <Right>
                <MdModeEditOutline className={styles.eicon} />
              </Right>
            </Card>
            <Card>
              <Left>
                <Title>
                  <h2>Use a credit or coupon</h2> <br />
                </Title>
                <Para>
                  <p>Apply a coupon code or credit to a new trip</p> <br />
                </Para>
              </Left>
              <Right>
                <RiMoneyDollarBoxFill className={styles.eicon} />
              </Right>
            </Card>
            <Card>
              <Left>
                <Title>
                  <h2>Track ypur refund</h2> <br />
                </Title>
                <Para>
                  <p>Check the status of a refund currently in progress</p>{" "}
                  <br />
                </Para>
              </Left>
              <Right>
                <BiMerge className={styles.eicon} />
              </Right>
            </Card>
          </CardCont>
        </ImgCont>
      </Cont>

      <Grid templateColumns="repeat(2, 1fr)" gap={5} className={styles.darkimg}>
        <GridItem
          w="100%"
          h="255"
          bgImage={firstimg[0].url}
          bgPosition="center"
          bgRepeat="no-repeat"
        >
          <div className={styles.importbox}>
            <h1 className={styles.hed}>{firstimg[0].title}</h1>
            <p> {firstimg[0].dis}</p>
            <Button>{firstimg[0].btnname}</Button>
          </div>
        </GridItem>
        <GridItem
          w="100%"
          h="255"
          bgImage={firstimg[1].url}
          bgPosition="center"
          bgRepeat="no-repeat"
        >
          <div className={styles.importbox}>
            <h1 className={styles.hed}>{firstimg[1].title}</h1>
            <p> {firstimg[1].dis}</p>
            <Button>{firstimg[1].btnname}</Button>
          </div>
        </GridItem>
      </Grid>

      <Box h={60}>
        <Image src={secimag} style={{ margin: "auto", paddingTop: "55px" }} />
      </Box>
    </MainCont>
  );
}

const MainCont = styled.div`
  padding-bottom: 0.75rem;
  padding-top: 0.75rem;
  width: 90%;
  margin: auto;
`;
const Cont = styled.div`
  padding: 0.75rem 0.75rem 1.5rem 0.75rem;
`;
const Heading = styled.div`
  color: #1f1f1f;
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 2rem;
  margin-left: 0.75rem;
  margin-right: 0.75rem;
  h3 {
    color: #1f1f1f;
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 2rem;
    margin: 0;
    padding-bottom: 0.75rem;
  }
`;
const ImgCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;

  img {
    width: 100%;
    filter: brightness(60%);
  }
`;
const CardCont = styled.div`
  width: 100%;
  padding: 0.4rem;
  display: flex;
  justify-content: space-between;
`;
const Card = styled.div`
  border: 1px solid #c4c4c4;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  width: 33.33%;
  padding-left: 0.3rem;
  margin: 0.375rem;
`;

const Left = styled.div``;
const Right = styled.div`
  padding-right: 0.75rem;
  padding-top: 0.75rem;
`;
const Title = styled.div`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.25rem;
  padding: 0.5rem 0.75rem 0rem;
  h2 {
    color: #1f1f1f;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.375rem;
    margin: 0;
  }
`;
const Para = styled.div`
  padding-left: 0.6rem;
  margin-top: -0.5rem;
  p {
    color: #616161;
    font-size: 0.875rem;
    font-weight: normal;
    line-height: 1.3em;
    padding-top: 0.2rem;
    padding-left: 0.2rem;
  }
`;
