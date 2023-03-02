import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const TravelerDetails = ({ indx, TravelerCount }) => {
	const [adults, setAdults] = useState(2);
	const [children, setChildren] = useState(0);
	const Adults = useRef(adults);
	const Children = useRef(children);
	const firstRender = useRef(1);
    const Action=useRef(1)
    


	useEffect(() => {


		if (indx === 0) TravelerCount.current = adults + children;
		else if (firstRender.current === 1) {
			TravelerCount.current += Adults.current + Children.current;
			firstRender.current++;
		} 
        else if(Action.current===-1 && TravelerCount.current>1){
            TravelerCount.current--
        }

        else TravelerCount.current += Adults.current + Children.current - 1;


        // console.log(TravelerCount.current)



	}, [TravelerCount, adults, children,indx]);

	return (
		<Box>
			<p style={{ fontWeight: "600" }}>Room-{indx + 1}</p>
			<Flex justifyContent="space-between" marginTop="10px">
				<p>Adults</p>
				<Flex>
					<Button
						size="sm"
						backgroundColor="#c83259"
						color="white"
						colorScheme="pink"
						onClick={() => {
							if (adults >= 2){ setAdults(adults - 1);Action.current=-1}
							else return;
						}}
					>
						-
					</Button>
					<p style={{ padding: "0px 10px" }}>{adults}</p>
					<Button
						size="sm"
						backgroundColor="#c83259"
						color="white"
						colorScheme="pink"
						onClick={() => {setAdults(adults + 1);Action.current=1}}
					>
						+
					</Button>
				</Flex>
			</Flex>
			<Flex justifyContent="space-between" marginTop="10px">
				<p>Children (Age 0-17)</p>
				<Flex>
					<Button
						size="sm"
						backgroundColor="#c83259"
						color="white"
						colorScheme="pink"
						onClick={() => {
							if (children >= 1) {setChildren(children - 1);Action.current=-1}
							else return;
						}}
					>
						-
					</Button>
					<p style={{ padding: "0px 10px" }}>{children}</p>
					<Button
						size="sm"
						backgroundColor="#c83259"
						color="white"
						colorScheme="pink"
						onClick={() => {setChildren(children + 1);Action.current=1}}
					>
						+
					</Button>
				</Flex>
			</Flex>
			<br />
			<hr style={{ backgroundColor: "black", height: "0.5px" }} />
			<br />
		</Box>
	);
};

export default TravelerDetails;
