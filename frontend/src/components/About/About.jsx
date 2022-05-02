import { Typography } from '@mui/material'
import React from 'react'
import "./about.css"
import space from "../../images/moon.jpg";

const About = () => {
  return (
    <div className="about">
    <div className="aboutContainer">
      <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quisquam.</Typography>
    </div>
    <div className="aboutContainer2">
      <div>
        <img src={space} alt="Abhi" className="aboutAvatar" />

        <Typography
          variant="h4"
          style={{ margin: "1vmax 0", color: "black" }}
        >
          Muhammad Junaid
        </Typography>

        <Typography>lore</Typography>

        <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
         Full stack developer
        </Typography>
      </div>

      <div>
        <Typography
          style={{
            wordSpacing: "5px",
            lineHeight: "50px",
            letterSpacing: "5px",
            textAlign: "right",
          }}
        >
            im a dev
        </Typography>
      </div>
    </div>
  </div>
  )
}

export default About