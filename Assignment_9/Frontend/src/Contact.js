import React from "react";
import NavBar from './components/Navbar';
const location = [
  {
    id: 1,
    name: "Lamborghini Beverly Hills",
    address: "8423 Wilshire Blvd, Beverly Hills, CA 90211, United States",
    contact: "Phone: (617) 541-5486"
  },
  {
    id: 2,
    name: "Lamborghini Tokyo",
    address: "1-1-17 Azabudai, Minato-ku, Tokyo 106-0041, Japan",
    contact: "Phone: (856) 883-9182"
  },
  {
    id: 3,
    name: "Lamborghini London",
    address: "77-85 New Bond St, Mayfair, London W1S 1RY, United Kingdom",
    contact: "Phone: (401) 345-3510"
  },
  {
    id: 4,
    name: "Lamborghini Dubai",
    address: "Sheikh Zayed Rd - Dubai - United Arab Emirates",
    contact: "Phone: (982) 439-6500"
  }
];

const CardListItem = props => {
  return (
    <li>
      <div
        className="card-container"
        style={{
          width: "50%",
          border: "solid 3px #d3d3d3",
          margin: "10px auto",
          backgroundColor:"#FFE5B4"
        }}
      >
        <p>
          <strong>{props.spot.name}</strong>
        </p>
        <p>{props.spot.address}</p>
        <p>{props.spot.contact}</p>
      </div>
    </li>
    
  );
};

const CardList = () => {
  return (
    <ul style={{ listStyleType: "none" }}>
      {location.map(spot => {
        return <CardListItem spot={spot} key={spot.id} />;
      })}
    </ul>
  );
};

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <CardList />
    </div>
  );
}
