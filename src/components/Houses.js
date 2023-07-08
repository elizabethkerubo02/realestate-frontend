import React, { useEffect , useState} from 'react'
import "./App.css"
import image3 from "./images1/image3.png";
import image4 from "./images1/image4.png";
import image5 from "./images1/image5.png";

function Houses() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/houses")
      .then((res) => res.json())
      .then((data) => {
        setHouses(data)})
      .catch((error) => {
        console.error("Failed to fetch houses:", error);
        // Handle the error (e.g., show an error message or set a default value)
      });
  }, []);
  
  console.log(houses);

  return (
    <>
      <div className="Featuredproperties">
        <h2>Our Featured Properties.</h2>
        <p>
          One of our biggest product to be featured and that has sold out the
          most.
        </p>
      </div>

      <div className="container6">
        {houses.map((house) => {
          return(
          <div className="bungalow">
            <img src={house.image} alt="palace" />
            <div className="palace">
              <h2>{house.name}</h2>
              <p>{house.location}</p>
            </div>
            <div className="palaceprice">
              <p>Duplex</p>
              <p style={{ color: "#2549D3" }}>{house.price}</p>
            </div>
          </div>
        )})}
      </div>

    
      <div className="viewmore">
        <button>View more</button>
      </div>
    </>
  );
  
}

export default Houses;
