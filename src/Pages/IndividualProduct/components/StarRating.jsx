import React, { useRef } from "react";

const StarRating = ({ stars}) => {
	const remainder = stars % 1;
	// console.log(stars)
	const Rating = useRef(new Array(Math.floor(stars)).fill(1));
	// console.log(Rating);

	return (
		<>
			{Rating.current.map((ele, indx) => {
				if (indx + 1 === Rating.current.length && remainder !== 0)
					return (
						<span  key={Math.random()}>
							<span
								className="material-icons"
								style={{ fontSize: "22px", color: "#6b646b" }}
							>
								star
							</span>
							<span
								className="material-icons"
								style={{ fontSize: "22px", color: "#6b646b" }}
							>
								star_half
							</span>
						</span>
					);
				else
					return (
						<span
							key={Math.random()}
							className="material-icons"
							style={{ fontSize: "22px", color: "#6b646b" }}
						>
							star
						</span>
					);
			})}
		</>
	);
};

export default StarRating;
