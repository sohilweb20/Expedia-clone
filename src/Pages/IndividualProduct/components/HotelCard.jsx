import { Button, Flex, Heading } from "@chakra-ui/react";
import "../IndProduct.css";
import {useNavigate} from "react-router-dom"


const HotelCard = ({Hotel}) => {
	// console.log(Hotel)
	const navigate=useNavigate()


	const ToPayment=()=>{
		navigate("/payment")
	}



	return (
		<div id="HotelCard">
			<img
				src={Hotel[0] && Hotel[0].images[0].url}
				alt="room img1"
			/>
			<div>
				<Heading size="sm">Room, {Hotel[0] && Hotel[0].price>2000?2:1} King Bed</Heading>
				<br />
				<Flex h="7" color="#6b646b" fontSize="14px" alignItems="center">
					<span style={{fontSize:"22px" }} className="material-icons">square_foot</span>
					<p style={{ paddingLeft: "10px" }}>{Hotel[0] && Math.floor(Hotel[0].price/5)} sq ft</p>
				</Flex>
				<Flex h="7" color="#6b646b" fontSize="14px" alignItems="center">
					<span style={{fontSize:"22px" }} className="material-icons">group</span>
					<p style={{ paddingLeft: "10px" }}>Sleeps {Hotel[0] && Hotel[0].price>2000?4:2}</p>
				</Flex>
				<Flex h="7" color="#6b646b" fontSize="14px" alignItems="center">
					<span style={{fontSize:"22px" }} className="material-icons">hotel</span>
					<p style={{ paddingLeft: "10px" }}>{Hotel[0] && Hotel[0].price>2000?2:1} King Bed</p>
				</Flex>
				<Flex h="7" color="#6b646b" fontSize="14px" alignItems="center">
					<span style={{fontSize:"22px" }} className="material-icons">wifi</span>
					<p style={{ paddingLeft: "10px" }}>Free Wifi</p>
				</Flex>
				<Flex h="7" color="#6b646b" fontSize="14px" alignItems="center">
					<span style={{fontSize:"22px" }} className="material-icons">local_parking</span>
					<p style={{ paddingLeft: "10px" }}>Free Self Parking</p>
				</Flex>
				<Flex h="7" color="#6b646b" fontSize="14px" alignItems="center">
					<span style={{fontSize:"22px" }} className="material-icons">check</span>
					<p style={{ paddingLeft: "10px" }}>Reserve now, pay deposit</p>
				</Flex>
				<Flex h="6" color="green" marginTop="10px">
					<p>{Hotel[0] && Hotel[0].paymentType}</p>
					<span className="material-icons">info_outline</span>
				</Flex>
				<p style={{ fontSize: "12px", color: "#6b646b" }}>Before Tue, Jul 26</p>
				<br />
				<p
					onMouseOver={(e) => {
						e.target.style.textDecoration = "underline";
						e.target.style.cursor = "pointer";
						return;
					}}
					onMouseLeave={(e) => {
						e.target.style.textDecoration = "none";

						return;
					}}
					style={{
						display: "flex",
						color: "teal",
					}}
				>
					More Details {">"}
				</p>
				<br />
				<div
					style={{
						backgroundColor: "#0e8445",
						color: "white",
						width: "fit-content",
						padding: "3px 8px",
						fontSize: "12px",
						fontWeight: "600",
						borderRadius: "5px",
					}}
				>
					30% off
				</div>
				<Flex h="10" alignItems="center">
					<Heading size="lg">Rs {Hotel[0] && Hotel[0].price}</Heading>
					<s style={{ padding: "0px 10px" }}>${Hotel[0] && Hotel[0].price*1.3}</s>
					<span className="material-icons" style={{ fontSize: "20px" }}>
						info_outline
					</span>
				</Flex>
				<p style={{ fontSize: "12px", color: "#6b646b", marginBottom: "16px" }}>
					${Hotel[0] && Hotel[0].price*1.3-Hotel[0].price} total savings
				</p>
				<Flex alignItems="center" justifyContent="space-between">
					<p
						onMouseOver={(e) => {
							e.target.style.textDecoration = "underline";
							e.target.style.cursor = "pointer";
							return;
						}}
						onMouseLeave={(e) => {
							e.target.style.textDecoration = "none";

							return;
						}}
						style={{
							display: "flex",
							color: "teal",
						}}
					>
						Price Details {">"}
					</p>
					<Button
						size="md"
						backgroundColor="#c83259"
						marginBottom="3px"
						borderRadius="3px"
						color="white"
						colorScheme="pink"
						onClick={ToPayment}
					>
						Reserve
					</Button>
				</Flex>
			</div>
		</div>
	);
};

export default HotelCard;
