import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../Pages/Login/Login";
import { Signup } from "../Pages/Signup/Signup";
import IndiProduct from "../Pages/IndividualProduct/IndiProduct";

import Productpage from "../Pages/Product/Productpage";
import { LandingPage } from "./Index/LandingPage";
import { PaymentPage } from "../Pages/Payment/PaymentPage";

const MainRoutes = () => {
	return (
		<Routes>
			<Route path="/Hotels" element={<Productpage />} />
			<Route path="/" element={<LandingPage />} />
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<Signup />} />
			<Route path="/Hotels/:id" element={<IndiProduct />} />
			<Route path="/payment" element={<PaymentPage/>}/>
		</Routes>
	);
};

export default MainRoutes;
