import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Image } from "@chakra-ui/react";

import "./Product.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
const Productpage = () => {
  const [price, setPrice] = useState(false);
  const [rating, setRating] = useState(false);
  const [review, setReview] = useState(false);

  const [page, setpage] = useState(1);
  const [data, setdata] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      let r = await axios.get(
        `https://orbitz-heroku-data.herokuapp.com/hotels/?_page=1&_limit=20`
      );
      // console.log(r.data);
      setdata(r.data);
    };

    getdata();
  }, [page]);

  const handleCheckbox = (e) => {
    // console.log(e.target.value)'
    if (e.target.value === "Fully Refundable") {
      data.filter((data) => {
        if (data.paymentType === "Fully Refundable") {
          return data;
        }
      });
    }
  };

  const handleSort = (e) => {
    console.log(data);
    // console.log(e.target.value,"e")
    if (e.target.value === "price") {
      data.sort((a, b) => {
        return a.price - b.price;
      });
      setPrice(true);
      setRating(false);
      setReview(false);
    } else if (e.target.value === "review") {
      data.sort((a, b) => {
        return b.reviews - a.reviews;
      });
      setPrice(false);
      setRating(false);
      setReview(true);
    } else if (e.target.value === "rating") {
      data.sort((a, b) => {
        return b.rating - a.rating;
      });
      setPrice(false);
      setRating(true);
      setReview(false);
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <h1>Product Productpage</h1>
        <div className="sortstyle">
          <select placeholder="Sort By" onClick={handleSort}>
            {/* <option><p>Recommanded</p></option> */}
            <option>sort by </option>

            <option value="price">sort by Price</option>
            <option value="review">Sort by reviews</option>
            <option value="rating">Sort by Rating</option>
          </select>
        </div>

        {/* <div className='map'>
<img src='https://maps.googleapis.com/maps/api/staticmap?channel=expedia-HotelInformation&maptype=roadmap&format=jpg&zoom=&size=600x400&markers=icon:https://a.travel-assets.com/shopping-pwa/images/his-preview-marker-orb.png%7C36.12366,-115.171029%7C36.147284,-115.15529%7C36.109447,-115.154007%7C36.11881,-115.17265%7C36.122197,-115.171625%7C36.102865,-115.17352%7C36.133037,-115.164702%7C36.117608,-115.172808%7C36.09659,-115.173085%7C36.116689,-115.172614&key=AIzaSyCYjQus5kCufOpSj932jFoR_AJiL9yiwOw&signature=YAet34Z4NDxKWEO54cZDeCqHE5s='/>
</div> */}
        <div className="filter">
          <h1>Filter By</h1>
          <h2>Popular Filters</h2>

          <input
            type="checkbox"
            value={"Fully Refundable"}
            onChange={handleCheckbox}
          />
          <label>Fully Refundable</label>
          <br></br>
          <input
            type="checkbox"
            value={"Fully Refundable"}
            onChange={handleCheckbox}
          />
          <label>All inclusive</label>
          <br></br>

          <input
            type="checkbox"
            value={"Fully Refundable"}
            onChange={handleCheckbox}
          />
          <label>Breakfast included</label>
          <br></br>
          <input
            type="checkbox"
            value={"Fully Refundable"}
            onChange={handleCheckbox}
          />
          <label>Hot tub</label>
          <br></br>
          <input
            type="checkbox"
            value={"Fully Refundable"}
            onChange={handleCheckbox}
          />
          <label>Hotel resort</label>
          <br></br>
          <input
            type="checkbox"
            value={"Fully Refundable"}
            onChange={handleCheckbox}
          />
          <label>House</label>
        </div>
        {/* <label> Fully Refundable</label>
<input type="checkbox"  value={''}/> */}

        {data.map((data, index) => (
          <Link to={`/Hotels/${data.id}`}>
            <div className="row" style={{}}>
              <div className="col-sm-1"></div>
              <div className="col-sm-4"></div>

              <div className="col-sm-6 cardstotal">
                <div className="col-sm-6">
                  <img
                    src={data.images[1].url}
                    style={{ height: "200px" }}
                    alt="img"
                  />
                </div>
                <div className="col-sm-6">
                  <p>Viewed</p>
                  <h2 style={{ color: "black" }}>{data.name}</h2>
                  <p>{data.address}</p>
                  <br></br>
                  <br></br>
                  <p>{data.paymentType}</p>
                  <p>{data.rating} (rating) </p>
                  <p>{data.reviews} good (reviews) </p>

                  <div className="side">
                    <button className="btn">
                      <p style={{ color: "white" }}>25% off</p>
                    </button>
                    <h2
                      style={{
                        fontWeight: "bold",
                        fontSize: "20px",
                        marginLeft: "40%",
                      }}
                    >
                      {data.price}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-sm-1"></div>
            </div>
          </Link>
        ))}
      </div>

      <Box h={60}>
        <Image
          width="100%"
          src="https://tpc.googlesyndication.com/simgad/10056509806482740393?"
          style={{ margin: "auto", paddingTop: "55px" }}
        />
      </Box>

      <Footer />
    </>
  );
};

export default Productpage;

// "id": 1,
// "name": "Taj Palace",
// "area": "Rajpath Marg",
// "rating": 4.6,
// "reviews": 745,
// "price": 2200,
// "delas": 0,
// "city": "Delhi",
// "paymentType": "Fully Refundable",
// "propertyType": "Hotel",
// "address": "2 Sardar Patel Marg, New Delhi, Delhi N.C.R, 110 021",
// "images": [
// {
// "url": "https://images.trvl-media.com/hotels/1000000/470000/465100/465005/b6be1b6d.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"
// },
