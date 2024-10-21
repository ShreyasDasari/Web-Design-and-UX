import React, { Component } from "react";
import NavBar from './components/Navbar';

class Home extends Component {
render() {
  return (
    
    <div className="content">
    <NavBar />
     <h2> Hello {sessionStorage.getItem("username")}!!!</h2>
     <br></br>
     <p>Lamborghini is a renowned Italian luxury car manufacturer that is famous for its high-performance sports cars. The company was founded in 1963 by Ferruccio Lamborghini, a successful businessman who had previously made a fortune producing tractors.</p>

     <p>Lamborghini initially started producing grand touring cars that combined sleek and stylish designs with powerful engines. Over the years, Lamborghini has become known for its iconic models such as the Countach, Diablo, Murcielago, and Aventador.</p>

     <p>Today, Lamborghini is known for producing some of the fastest and most expensive cars in the world, with models such as the Huracan and the Urus SUV. The brand is synonymous with luxury and high performance, and its cars are a status symbol for wealthy car enthusiasts. Lamborghini's cars are known for their distinctive designs, with sharp angles and aggressive lines that convey a sense of power and speed.</p>
     <p>In addition to its cars, Lamborghini has also become involved in other areas of the luxury market, such as high-end clothing and accessories. The brand's logo, a charging bull, is instantly recognizable and is often seen as a symbol of strength and power. Overall, Lamborghini has a long and storied history as one of the world's premier luxury car manufacturers. Its cars are known for their speed, power, and distinctive design, and the brand continues to be a favorite among car enthusiasts and collectors alike.</p>
   </div>
  );
 }
}

export default Home;
