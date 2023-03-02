import React from "react";
import "../IndProduct.css";

const VipaccessCard = () => {
	return (
		<div style={{ width: "80%", margin: "auto", padding: "10px" }}>
			<p
				style={{
					fontWeight: "600",
					fontSize: "18px",
					margin: "auto",
					padding: "5px 20px",
				}}
			>
				<span
					style={{
						borderRadius: "50%",
						backgroundColor: "black",
						color: "white",
						padding: "6px",
					}}
				>
					VIP
				</span>
				Access
			</p>
			<div id="VipCard">
				<div>
					<p style={{ paddingLeft: "10px", color: "#6b646b" }}>
						All VIP Access accommodations frequently receive excellent reviews
						and are carefully selected for their quality.
					</p>
				</div>
				<div style={{ display: "flex", marginLeft: "10px" }}>
					<span
						className="material-icons"
						style={{ fontSize: "25px", color: "#6b646b" }}
					>
						emoji_emotions
					</span>
					<p style={{ paddingLeft: "10px", color: "#6b646b" }}>
						You will receive exceptional service
					</p>
				</div>
				<div style={{ display: "flex" }}>
					<span
						className="material-icons"
						style={{ fontSize: "25px", color: "#6b646b" }}
					>
						card_giftcard
					</span>

					<p style={{ paddingLeft: "10px", color: "#6b646b" }}>
						You'll get discounts and extra benefits for Rewards members
					</p>
				</div>
			</div>
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
					paddingRight:"10px",
					margin: "auto",
					justifyContent: "right",
				}}
			>
				Learn more about VIP Access {">"}
			</p>
		</div>
	);
};

export default VipaccessCard;
