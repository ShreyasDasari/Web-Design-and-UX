import React, { Component } from "react";
import NavBar from './components/Navbar';
 import "bootstrap/dist/css/bootstrap.min.css";
import Cards from '../src/components/Cards';
import dolphin from '../src/images/dolphin.jpg';
import jeremy from '../src/images/jeremy.jpg';
import koala from '../src/images/koala.jpg';
import monkey from '../src/images/monkey.jpg';

function Jobs() {
    const jobInfo = [
        {
            image: monkey,
            title: "Automotive Technician",
            text: "Huracan"
        },
        {
            image: jeremy,
            title: "Lead Mechanical Engineer",
            text: "Aventador"
        },
        {
          image: koala,
          title: "Automotive Engineer",
          text: "Urus"
      },
      {
        image: dolphin,
        title: "Senior Design Engineer",
        text: "Revuelto"
    }
    ]
    
    return (
        <div class="content">
            <NavBar />
            <h2>Open Positions</h2>

            <Cards info={jobInfo} />
            {/* <div className="row">
                {jobInfo.map((job, index) => (
                <div className="col-md-6 col-lg-4 mb-4" key={index}>
                    <Cards image={job.image} title={job.title} text={job.text} />
                </div>
                ))}
            </div> */}
        </div>
    )
    
}

export default Jobs;