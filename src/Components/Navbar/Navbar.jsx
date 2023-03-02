import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import * as action from "../../Redux/AuthReducer/action";
// import { useToast } from "@chakra-ui/react";

export const Navbar = () => {
  //   const isAuth = useSelector((store) => store.authReducer.isAuth);
  //   const dispatch = useDispatch();
  //   const toast = useToast();

  //   const signIn_signOUt = () => {
  //     if (isAuth)
  //       toast({
  //         title: "You have been logged out",
  //         description: "Please Login for proceeding for booking rooms and hotels",
  //         status: "success",
  //         position: "top",
  //         duration: 3000,
  //         isClosable: true,
  //       });

  //     dispatch(action.logoutSuccess());
  //   };

  return (
    <div id="Navbar">
      <div>
        <Link to="/">
          <div id="SiteLogo">
            <img
              src="https://i0.wp.com/www.securi.haus/wp-content/uploads/thumb-orbitz-logo.jpg?fit=900%2C400&ssl=1"
              alt=""
            />
          </div>
        </Link>
        <div style={{ display: "flex" }}>
          <h4>More travel options</h4>
          <span class="material-icons" style={{ color: "white" }}>
            expand_more
          </span>
        </div>
      </div>
      <div>
        <div>
          <h4>English</h4>
        </div>
        <div>
          <h4>List a property</h4>
        </div>
        <div>
          <h4>Customer Support</h4>
        </div>
        <div>
          <h4>My travel</h4>
        </div>
        <Link to={"/signup"}>
          <div>
            <h4>Sign-in</h4>
          </div>
        </Link>
      </div>
    </div>
  );
};
