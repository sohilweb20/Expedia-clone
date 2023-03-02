import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import styles from"./Reward.module.css"

export const Featuredoffers = () => {
  const img = [
    {
      url: "https://forever.travel-assets.com/flex/flexmanager/images/2021/11/02/ORB_Storefront_LastMinute_imgB_900x600_20211101.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh",
      title: "Last-minute deal",
      p: "Getaway today",
    },
    {
      url: "https://forever.travel-assets.com/flex/flexmanager/images/2021/11/02/ORB_Storefront_AllInclusive_imgB_900x600_20211101.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh",
      title: "All-inclusive resorts ",
      p: "Enjoy sun and fun",
    },
    {
      url: "https://forever.travel-assets.com/flex/flexmanager/images/2021/11/02/ORB_Storefront_MOD_imgB_900x600_20211101.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh",
      title: "Insider Prices ",
      p: "Members get rewarded",
    },
    {
      url: "https://forever.travel-assets.com/flex/flexmanager/images/2021/11/02/ORB_Storefront_JetAndReset_imgB_900x600_20211101.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh",
      title: "Jet and reset ",
      p: "Fly somewhere beachy and warm",
    },
  ];
  const MainCont = styled.div`
    padding-bottom: 0.75rem;
    padding-top: 0.75rem;
    width: 90%;
    margin: auto;
  `;
  const Cont = styled.div`
    padding: 0.75rem 0.75rem 0.75rem 0.75rem;
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
      //padding-bottom: 0.5rem;
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
    padding: 0.75rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
  `;
  const ImgCardCont = styled.div`
    position: relative;
  `;
  const Title = styled.div`
    position: absolute;
    bottom: 0;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.25rem;
    padding: 2.75rem 0.75rem 0.5rem;
    h2 {
      font-size: 1.125rem;
      font-weight: 700;
      line-height: 1.375rem;
      color: #fff;
    }
  `;
  const TextCont = styled.div`
    padding-bottom: 0.75rem;
    margin-top: 0.3rem;
    p {
      color: white;

      font-size: 0.875rem;
      font-weight: normal;
      line-height: 1.3em;
    }
  `;

  const seaimg="https://forever.travel-assets.com/flex/flexmanager/images/2020/12/03/ORB_Storefront_Deals_2740x1484-V1.jpg"
 const seaimgs="https://tpc.googlesyndication.com/simgad/6378264940813121541?";
  return (
    <MainCont>
      <Cont>
        <Heading>
          <h3>Featured offers</h3>
        </Heading>
        <ImgCont>
          {img.map((i) => (
            <Link to="/Hotels"><CardCont>
            <ImgCardCont>
              <img src={i.url} alt="" />
              <Title>
                <h2>{i.title}</h2>
                <TextCont>
                  <p>{i.p}</p>
                </TextCont>
              </Title>
            </ImgCardCont>
          </CardCont></Link>
          ))}
        </ImgCont>
      </Cont>

    <div className={styles.mss} >


   <Box className={styles.firstcss} bgImage={seaimg}   
       bgRepeat="no-repeat" >

   </Box>
   <Box className={styles.seccss} bgImage={seaimgs}   bgPosition="center" 
          bgRepeat="no-repeat">

   
   </Box>


    
    


    </div>
    </MainCont>
  );
};
