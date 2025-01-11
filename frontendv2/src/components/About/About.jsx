import React from 'react'
import "./about.css"

const About = ({about}) => {
  return (
    <div className="about">
    <div className="aboutContainer">
      <h5>{about.quote}</h5>
    </div>
    <div className="aboutContainer2">
      <div>
        <img src={about.avatar.url} alt="Abhi" className="aboutAvatar" />

        <h4
          style={{ margin: "1vmax 0", color: "black" }}
        >
          {about.name}
        </h4>

        <h5>{about.title}</h5>

        <h5 style={{ margin: "1vmax 0", textAlign: "center" }}>
       {about.subTitle}
        </h5>
      </div>

      <div>
        <h5
          style={{
            wordSpacing: "5px",
            lineHeight: "50px",
            letterSpacing: "5px",
            textAlign: "right",
          }}
        >
            {about.description}
        </h5>
      </div>
    </div>
  </div>
  )
}

export default About