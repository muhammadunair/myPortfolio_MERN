import React, { useEffect } from "react";
import "./home.css";
import * as THREE from "three";
// import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import moonImg from "../../images/moon.jpg";
import venusIMG from "../../images/venus.jpg";
import spaceIMG from "../../images/space.jpg";
import { Typography } from "@mui/material";
import TimeLine from "../TimeLine/TimeLine";
import logo from "../../images/logo.png";
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from "react-icons/si";
import Projects from "../Projects/Projects";

const Home = ({timelines,skills,project}) => {
  // useEffect(() => {
  //   const textureloader = new THREE.TextureLoader();

  //   const moonsTexture = textureloader.load(moonImg);
  //   const venusTexture = textureloader.load(venusIMG);
  //   const spaceTexture = textureloader.load(spaceIMG);

  //   const scene = new THREE.Scene();
  //   const camera = new THREE.PerspectiveCamera(
  //     60,
  //     window.innerWidth / window.innerHeight,
  //     0.1,
  //     1000
  //   );
  //   camera.position.set(4, 4, 8);

  //   const canvas = document.querySelector(".homeCanvas");
  //   const renderer = new THREE.WebGLRenderer({ canvas });

  //   const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
  //   const moonMaterial = new THREE.MeshStandardMaterial({ map: moonsTexture });
  //   const moon = new THREE.Mesh(moonGeometry, moonMaterial);

  //   const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
  //   const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
  //   const venus = new THREE.Mesh(venusGeometry, venusMaterial);
  //   venus.position.set(8, 5, 5);

  //   const pointLight = new THREE.PointLight(0xffffff, 1);
  //   const pointLight2 = new THREE.PointLight(0xffffff, 0.1);
  //   pointLight.position.set(8, 5, 5);
  //   pointLight2.position.set(-8, -5, -5);

  //   // const control = new OrbitControls(camera, renderer.domElement)

  //   scene.add(moon);
  //   scene.add(pointLight);
  //   scene.add(pointLight2);
  //   scene.add(venus);
  //   scene.background = spaceTexture;

  //   const constSpeed = 0.01;
  //   window.addEventListener("mousemove", (e) => {
  //     if (e.clientX <= window.innerWidth / 2) {
  //       moon.rotation.x -= constSpeed;
  //       moon.rotation.y += constSpeed;
  //       venus.rotation.x -= constSpeed;
  //       venus.rotation.y += constSpeed;
  //     }

  //     if (e.clientX > window.innerWidth / 2) {
  //       moon.rotation.x -= constSpeed;
  //       moon.rotation.y -= constSpeed;
  //       venus.rotation.x -= constSpeed;
  //       venus.rotation.y -= constSpeed;
  //     }
  //     if (e.clientY <= window.innerHeight / 2) {
  //       moon.rotation.x -= constSpeed;
  //       moon.rotation.y += constSpeed;
  //       venus.rotation.x -= constSpeed;
  //       venus.rotation.y += constSpeed;
  //     }
  //     if (e.clientY > window.innerHeight / 2) {
  //       moon.rotation.x -= constSpeed;
  //       moon.rotation.y -= constSpeed;
  //       venus.rotation.x -= constSpeed;
  //       venus.rotation.y -= constSpeed;
  //     }
  //   });

  //   const animate = () => {
  //     requestAnimationFrame(animate);

  //     moon.rotation.y += 0.001;
  //     venus.rotation.y += 0.001;
  //     renderer.setSize(window.innerWidth, window.innerHeight);
  //     renderer.render(scene, camera);
  //   };
  //   animate();
  // }, []);

  return (
    <>
    <div className="home">
      <canvas className="homeCanvas" ></canvas>

      <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        <TimeLine timelines={timelines} />
      </div>

      <div className="homeSkills">
        <Typography variant="h3">SKILLS</Typography>
        <div className="homeCubeSKills">
          <div className="homeCubeSKillsFaces homeCubeSKillsFace1">
            <img src={skills.image1.url} alt="face1" />
          </div>
          <div className="homeCubeSKillsFaces homeCubeSKillsFace2">
            <img src={skills.image2.url} alt="face2" />
          </div>

          <div className="homeCubeSKillsFaces homeCubeSKillsFace3">
            <img src={skills.image3.url} alt="face3" />
          </div>

          <div className="homeCubeSKillsFaces homeCubeSKillsFace4">
            <img src={skills.image4.url} alt="face4" />
          </div>
          <div className="homeCubeSKillsFaces homeCubeSKillsFace5">
            <img src={skills.image5.url} alt="face5" />
          </div>
          <div className="homeCubeSKillsFaces homeCubeSKillsFace6">
            <img src={skills.image6.url} alt="face6" />
          </div>
        </div>
        <div className="cubeshadow"></div>
        <div className="homeskillsBox" id="homeskillsBox">
          <SiCplusplus />
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiMongodb />
          <SiExpress />
          <SiReact />
          <SiNodedotjs />
          <SiThreedotjs />
        </div>


       
      </div>
     
    </div>
     <Projects project={project}/>
     </>
  );
};

export default Home;
