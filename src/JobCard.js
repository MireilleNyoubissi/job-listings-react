import React, { useState } from "react";

function JobCard(props){
  const [highlight, setHighlight] = useState(false);

  function highlightCard(index) {
    if(highlight === index) {
      setHighlight(false);
    } else {
      setHighlight(index);
    }
  }
    return (
      <div className="card-container">
        {props.data.map((jobProfile, index) => (
          <div onClick = {() => highlightCard(index)} className = "card" id = {highlight === index? "highlight": ""}>
            <img
              key={index + 0.5}
              src={jobProfile.logo}
              className="card-img-top"
              alt="company's logo"
            />
            <div className="card-body">
              <h5 className="card-title" key={index + 0.2}>
                {jobProfile.company}

                {jobProfile.new ? (
                  <span className="newsStyle">New!</span>
                ) : null}

                {jobProfile.new ? (
                  <span className="featuredStyle">FEATURED</span>
                ) : null}
              </h5>
              <div className="ul-wrapper">
                <div className="left">
                  <h6 className="card-text" key={index + 0.1}>
                    {jobProfile.position}
                  </h6>
                  <ul className="list1">
                    <li className="card-text" key={index + 0.23}>
                      {jobProfile.postedAt}
                    </li>
                    <li className="card-text" key={index + 0.33}>
                      {jobProfile.contract}
                    </li>
                    <li className="card-text" key={index + 0.15}>
                      {jobProfile.location}
                    </li>
                  </ul>
                </div>
                <div className="right">
                  <ul className="list2">
                    <li>{jobProfile.role}</li>
                    <li>{jobProfile.level}</li>
                    {jobProfile.tools.map((v) => (
                      <li>{v}</li>
                    ))}
                    {jobProfile.languages.map((v) => (
                      <li>{v}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
}

export default JobCard;