import React from "react";
import HotelCard from "./HotelCard";
import "../IndProduct.css";
import HotelCardFilter from "./HotelCardFilter";
import { Heading } from "@chakra-ui/react";
import axios from "axios"
import { useEffect, useState } from "react";

const HotelParent = ({checkAvailability}) => {

	const [HotelsList,setHotelsList]=useState([])

	useEffect(()=>{
		axios.get("https://orbitz-heroku-data.herokuapp.com/hotels/?page=1&_limit=8").then(r=>setHotelsList(r.data))
	},[])


	return (
		<div style={{width:"80%",margin:"auto",backgroundColor:"#f4f2f2"}}>
            <br />
            <Heading size="lg" h="14">Choose your room</Heading>
			<HotelCardFilter checkAvailability={checkAvailability} />
			<br />
			<div id="HotelParent">
				{HotelsList.length && HotelsList.map((ele,indx)=>{
					return <HotelCard key={indx} Hotel={[ele]} />
				})}
			</div>
		</div>
	);
};

export default HotelParent;
