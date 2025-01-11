import React, { useEffect, useState } from "react";
import "./home.css";
import * as THREE from "three";
// import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import moonImg from "../../images/moon.jpg";
import venusIMG from "../../images/venus.jpg";
import spaceIMG from "../../images/spacenew.jpg";
import nowwhere from "../../images/space4.jpg";
import TimeLine from "../TimeLine/TimeLine";
import Projects from "../Projects/Projects";
import Loader from "../../loader/Loader";
import { Link } from "react-router-dom";
import { MdOutlineInsertChartOutlined } from "react-icons/md";


const Home = ({ timelines = [], skills=[], project=[] }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const textureloader = new THREE.TextureLoader();

    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });
    const moonsTexture = textureloader.load(moonImg, () => {
      setLoading(true);
    });
    const venusTexture = textureloader.load(venusIMG);
    const nowhereTexture = textureloader.load(nowwhere);
    const spaceTexture = textureloader.load(spaceIMG);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(3, 4, 8);

    const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonsTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
    moon.position.set(3, 4, 1);

    const venusGeometry = new THREE.SphereGeometry(2, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.position.set(6, 2, 5);

    const nowhereGeometry = new THREE.SphereGeometry(2, 50, 50);
    const nowhereMaterial = new THREE.MeshBasicMaterial({
      map: nowhereTexture,
    });
    const nowhere = new THREE.Mesh(nowhereGeometry, nowhereMaterial);
    nowhere.position.set(-1, 5, 5);

    const pointLight = new THREE.PointLight(0xffffff, 1.6);
    // const pointLight2 = new THREE.PointLight(0xffffff, 1.6);
    // const pointLight3 = new THREE.PointLight(0xffffff, 1.6);
    pointLight.position.set(8, 2, 10);
    // pointLight2.position.set(-8, -5, -5);
    // pointLight3.position.set(1.5, 5, 5);

    // const control = new OrbitControls(camera, renderer.domElement)

    scene.add(moon);
    scene.add(nowhere);
    scene.add(venus);
    scene.add(pointLight);
    // scene.add(pointLight3);
    // scene.add(pointLight2);
    scene.background = spaceTexture;

    const constSpeed = 0.01;
    window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
        nowhere.rotation.x -= constSpeed;
        nowhere.rotation.y += constSpeed;
      }

      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
        nowhere.rotation.x -= constSpeed;
        nowhere.rotation.y -= constSpeed;
      }
      if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
        nowhere.rotation.x -= constSpeed;
        nowhere.rotation.y += constSpeed;
      }
      if (e.clientY > window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
        nowhere.rotation.x -= constSpeed;
        nowhere.rotation.y -= constSpeed;
      }
    });

    const animate = () => {
      requestAnimationFrame(animate);

      moon.rotation.y += 0.001;
      venus.rotation.y += 0.001;
      nowhere.rotation.y += 0.001;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };
    animate();
  
  }, []);

  return (
    <>
      {!loading ? <Loader /> : null}
      <div className="home">
        <canvas className="homeCanvas"></canvas>
        <div className="homeCanvasContainer">
        <h1>
      
          <p>J</p>
          <p>U</p>
          <p>N</p>
          <p>A</p>
          <p>I</p>
          <p>D</p>
        </h1>
        <div className="homeCanvasBox">
          <h2 >DESIGNER</h2>
          <h2 >DEVELOPER</h2>
          </div>
        <Link to="/projects">VIEW WORK</Link>
        <div className="homeScrollBtn">
        {/* <MdOutlineInsertChartOutlined /> */}
      </div>
        </div>
        <div className="homeContainer">
          <h3>TIMELINE</h3>
          <TimeLine timelines={timelines} />
        </div>

        <div className="homeSkills" id="homeSkills">
          <h3>SKILLS</h3>
          <div className="homeCubeSKills">
            <div className="homeCubeSKillsFaces homeCubeSKillsFace1">
              <img src={skills?.image1?.url} alt="face1" />
            </div>
            <div className="homeCubeSKillsFaces homeCubeSKillsFace2">
              <img src={skills?.image2?.url} alt="face2" />
            </div>

            <div className="homeCubeSKillsFaces homeCubeSKillsFace3">
              <img src={skills?.image3?.url} alt="face3" />
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
          {/* <div className="homeskillsBox" id="homeskillsBox">
            <SiCplusplus />
            <SiHtml5 />
            <SiCss3 />
            <SiJavascript />
            <SiMongodb />
            <SiExpress />
            <SiReact />
            <SiNodedotjs />
            <SiThreedotjs />
          </div> */}
        </div>
        <Projects project={project} />
      </div>
    </>
  );
};

export default Home;
