import { useState } from "react";

const GroupBar = ({ handlepaymenttype, handleSelectPriceOption }) => {


    // const [price, setprice] = useState([1, 100])
    function handleChange(e){
// console.log(e.target.value,"e")
if(e.target.value==="price"){
    
}
    }
    return (
        <select placeholder="Sort By" onChange={handleChange}>
            {/* <option><p>Recommanded</p></option> */}
            <option value='price'>Price </option>
            <option value='review'>Sort by reviews</option>
            <option value='rating'>Sort by Rating</option>
            
        </select>
        

        //   <Row className="group-bar">
        //     <Group
        //       title="Product group"
        //       element={
        //         <Dropdown
        //           items={["Milk Tea", "Juice"]}
        //           onSelect={handleSelectCategory}
        //         />
        //       }
        //     />
        //     <Group
        //       title="Sort by price"
        //       element={<Dropdown
        //         items={["Low to hight", "Hight to low"]}
        //         onSelect={handleSelectPriceOption}
        //       />}
        //     />
        //     <Group
        //       title="Search"
        //       element={<Search searchTerm="" />}
        //     />
        //   </Row>
    );
}

export default GroupBar;
