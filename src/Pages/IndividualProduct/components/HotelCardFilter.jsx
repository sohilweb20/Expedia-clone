import { Box, Button, Flex, Input, useDisclosure, VisuallyHiddenInput } from "@chakra-ui/react";
import React, {useRef} from "react";
import "../IndProduct.css";
import { VisuallyHidden } from "@chakra-ui/react";
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverHeader,
	PopoverBody,
	PopoverArrow,
	PopoverCloseButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import TravelerDetails from "./TravelerDetails";
import {useDispatch, useSelector} from "react-redux"
import * as action from "../../../Redux/AppReducer/action"

const HotelCardFilter = ({ checkAvailability }) => {
	const [roomCount, setRoomcount] = useState(1);
	const arr=useRef(new Array(roomCount).fill(1))
	const {onOpen,onClose,isOpen}=useDisclosure()
	const openRef=useRef(null)
	const TravelerCount=useRef(0)
	const dispatch=useDispatch()
	const totalRooms=useSelector(store=>store.appReducer.ROOMCOUNT)
	const totalTravelers=useSelector(store=>store.appReducer.TRAVELERCOUNT)

// console.log(totalRooms,totalTravelers)


	const handleClick=()=>{
		checkAvailability()
		onClose()
		if(roomCount>1)
		dispatch(action.RoomCountrequest(roomCount-1))
		else 
		dispatch(action.RoomCountrequest(roomCount))
		dispatch(action.TravelerCountRequest(TravelerCount.current))
	}





	useEffect(()=>{
		if(roomCount===2){
			setRoomcount(roomCount+1)
		}
		arr.current=new Array(roomCount).fill(1)
	},[arr,roomCount])

	

	return (
		<div id="hotelCardFilter">
			<Input
				type="date"
				placeholder="Check-in date"
				size="lg"
				outline="1px solid #6b646b"
				width="200px"
			/>
			<Input
				type="date"
				placeholder="Check-out date"
				size="lg"
				outline="1px solid #6b646b"
				width="200px"
			/>
			<Flex
				alignItems="center"
				h="12"
				paddingLeft="16px"
				width="310px"
				border="1px solid #6b646b"
				borderRadius="4px"
			>
				<span style={{ fontSize: "22px" }} className="material-icons">
					group
				</span>
				<Box paddingLeft="10px">
					<p style={{ fontSize: "12px" }}>Travelers</p>
					<p>{totalRooms} Room, {totalTravelers} Travelers</p>
				</Box>
			</Flex>

			{/* <VisuallyHidden> */}
			<div id="popover">
				<Popover
				isOpen={isOpen}
				initialFocusRef={openRef}
				onOpen={onOpen}
				onClose={onClose}
				closeOnBlur={false}
				>
					<PopoverTrigger>
						<Button width="100%" height="100%" opacity="0">
							Trigger
						</Button>
					</PopoverTrigger>
					<PopoverContent>
						<PopoverArrow />
						<VisuallyHiddenInput ref={openRef}/>
						<PopoverCloseButton />
						<PopoverHeader color="black" fontWeight="700" fontSize="20px">
							Traveler's Details
						</PopoverHeader>
						<PopoverBody height="350px" overflow="scroll">
							<Box
								height="100%"
								paddingBottom="10px"
								display="flex"
								flexDir="column"
								justifyContent="space-between"
							>
								<Box>
									{
										arr.current.map((ele,indx)=>{
											return (<TravelerDetails key={indx} TravelerCount={TravelerCount} indx={indx} />)
										})
									}

									<Flex justifyContent="flex-end">
										<Button
											color="teal.500"
											onClick={() => setRoomcount(roomCount + 1)}
										>
											Add another Room
										</Button>
									</Flex>
								</Box>
								<br /><br />

								<Box display="flex" justifyContent="center">
									<Button
										size="md"
										backgroundColor="#c83259"
										color="white"
										colorScheme="pink"
										onClick={handleClick}
									>
										Check Availability
									</Button>
								</Box>
							</Box>
						</PopoverBody>
					</PopoverContent>
				</Popover>
			</div>

			{/* </VisuallyHidden> */}

			<Button
				size="lg"
				backgroundColor="#c83259"
				marginBottom="3px"
				borderRadius="3px"
				color="white"
				colorScheme="pink"
				padding="0px 50px"
				onClick={checkAvailability}
			>
				Check Availability
			</Button>
		</div>
	);
};

export default HotelCardFilter;
