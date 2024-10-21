import React from 'react';
import NavBar from './components/Navbar';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';

function About() {
  return (
    <div class="content">
    <NavBar />
    
    <MDBCard style={{width:"40%",margin:"20px auto"}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://jooinn.com/images/lamborghini-logo-11.jpg' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>The Story About Us</MDBCardTitle>
        <MDBCardText>
        Lamborghini is an Italian luxury sports car manufacturer that was founded in 1963 by Ferruccio Lamborghini. Our company is known for producing high-performance sports cars that combine sleek and stylish designs with powerful engines. Our cars are a symbol of luxury and high performance, and are renowned for their distinctive designs, with sharp angles and aggressive lines that convey a sense of power and speed. At Lamborghini, we are committed to delivering the highest quality products and services to our customers. We believe that our success is directly tied to the satisfaction of our customers, and we strive to exceed their expectations in everything we do. Our dedicated team of engineers, designers, and craftsmen work tirelessly to create cars that are not only beautiful and powerful, but also safe and reliable. We are also committed to innovation and sustainability, and we continually strive to reduce our environmental impact through the use of sustainable materials and production processes. We are proud of our heritage and our role in shaping the future of the automotive industry. At Lamborghini, we believe that our customers are not just buying a car, but a lifestyle. Our brand is a symbol of exclusivity, luxury, and high performance, and we are dedicated to delivering the ultimate driving experience to our customers. We invite you to explore our website and discover the world of Lamborghini.
        </MDBCardText>
        <MDBBtn href='#' style={{backgroundColor:"#000000"}}>Know More</MDBBtn>
      </MDBCardBody>
      
    </MDBCard>
    
    </div>
    
  );
}
export default About;