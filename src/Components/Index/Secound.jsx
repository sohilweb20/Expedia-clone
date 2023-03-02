import React from "react";
import styled from "styled-components";

export const Secound = () => {
  const Card2Cont = styled.div`
  width: 100%;
  padding: 1.5rem 0rem;
  display: flex;
  justify-content: space-between;
`;
const Card2 = styled.div`
  padding: 1.5rem;
  img {
    width: 100%;
  }
`;
const travelimg = [
  {
    url: "https://forever.travel-assets.com/flex/flexmanager/images/2021/06/11/ORB_BrandPromise_TravelAsYouAre_imgB_840x473_20210611.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh",
  },
  {
    url: "https://forever.travel-assets.com/flex/flexmanager/images/2021/04/01/ORB_BrandPromise_Rewards_imgB_840x473_20210331.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh",
  },
  {
    url: "https://forever.travel-assets.com/flex/flexmanager/images/2021/04/01/ORB_BrandPromise_IGLTA_imgB_840x473_20210330.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh",
  },
];


  return (
    <div style={{width:"90%",margin:"auto"}}>
      <Card2Cont>
        {travelimg.map((i) => (
          <Card2 key={i}>
            <img src={i.url} alt="" />
          </Card2>
        ))}
        ;
      </Card2Cont>


    </div>
  );
};
