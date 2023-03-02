import React, { useEffect, useState } from "react";
import "./IndProduct.css";
import { Tabs, TabList, Tab, useToast } from "@chakra-ui/react";
import { Button, Box, Image } from "@chakra-ui/react";
import HotelDetails from "./components/HotelDetails";
import HotelParent from "./components/HotelParent";
import { useParams } from "react-router-dom";
import { Navbar } from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const IndiProduct = () => {
	const [Hotel, setHotel] = useState([]);
	const toast = useToast();
	const { id } = useParams();

	useEffect(() => {
		fetch(`https://orbitz-heroku-data.herokuapp.com/hotels/?id=${id}`)
			.then((r) => r.json())
			.then((data) => {
				if (data[0]) {
					setHotel(data);
				} else return;
			});
	}, [setHotel]);

	const Rooms = () => {
		window.scrollTo({ top: 1160, behavior: "smooth" });
	};

	const services = () => {
		window.scrollTo({ top: 550, behavior: "smooth" });
	};

	const location = () => {
		window.scrollTo({ top: 400, behavior: "smooth" });
	};

	const bottom = () => {
		window.scrollTo({ top: 10000, behavior: "smooth" });
	};

	const checkAvailability = () => {
		const Luck = Math.random();
		if (Luck > 0.37) {
			toast({
				title: "Rooms available.",
				description: "Please check the list of the available hotels",
				position: "top",
				status: "success",
				duration: 7000,
				isClosable: true,
			});
		} else {
			toast({
				title: "Sorry Rooms not available currently",
				description: "We will update you as soon as the queue is cleared",
				position: "top",
				status: "error",
				duration: 7000,
				isClosable: true,
			});
		}
	};

	return (
		<>
			<Navbar />
			<div id="ProductParent">
				<br />
				<br />
				<div id="indProductImg">
					<div>
						<img src={Hotel[0] && Hotel[0].images[0].url} alt="hotel img1" />
					</div>
					<div className="childhotelImg">
						<div>
							<img src={Hotel[0] && Hotel[0].images[1].url} alt="hotel img2" />
						</div>
						<div>
							<img src={Hotel[0] && Hotel[0].images[2].url} alt="hotel img3" />
						</div>
						<div>
							<img src={Hotel[0] && Hotel[0].images[3].url} alt="hotel img4" />
						</div>
						<div>
							<img src={Hotel[0] && Hotel[0].images[4].url} alt="hotel img5" />
						</div>
					</div>
				</div>
				<Tabs width="80%" margin="auto" padding="5px 0px">
					<TabList id="Tabs" justifyContent="space-between">
						<div>
							<Tab className="productTabs" fontWeight="600" color="#6b646b">
								Summary
							</Tab>
							<Tab
								className="productTabs"
								fontWeight="600"
								color="#6b646b"
								onClick={Rooms}
							>
								Rooms
							</Tab>
							<Tab
								className="productTabs"
								fontWeight="600"
								color="#6b646b"
								onClick={location}
							>
								Location
							</Tab>
							<Tab
								className="productTabs"
								fontWeight="600"
								color="#6b646b"
								onClick={services}
							>
								Services
							</Tab>
							<Tab
								className="productTabs"
								fontWeight="600"
								color="#6b646b"
								onClick={bottom}
							>
								Policies
							</Tab>
							<Tab
								className="productTabs"
								fontWeight="600"
								color="#6b646b"
								onClick={bottom}
							>
								Opinions
							</Tab>
						</div>

						<div style={{ marginRight: "10px" }}>
							<Button
								size="md"
								backgroundColor="#c83259"
								marginBottom="3px"
								borderRadius="3px"
								color="white"
								colorScheme="pink"
								onClick={Rooms}
							>
								Book a room
							</Button>
						</div>
					</TabList>
				</Tabs>
				<HotelDetails Hotel={Hotel} />
				<br />
				<HotelParent checkAvailability={checkAvailability} />
			</div>
			<Box h={60}>
				<Image width="100%"
					src="https://tpc.googlesyndication.com/simgad/10056509806482740393?"
					style={{ margin: "auto", paddingTop: "55px" }}
				/>
			</Box>
			<Footer />
		</>
	);
};

export default IndiProduct;
