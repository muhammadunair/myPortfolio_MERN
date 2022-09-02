import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, {useEffect} from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Project from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./Action/Action";
import axios from "axios";


const App = () => {
  let [ posts, setPosts ] = React.useState([])
  // async function getResults() {
  //   const results = await axios.get('/api/v1/user');
  //   setPosts(results.data)

  // }
    function getResults() {

     



   axios.get('http://localhost:3001/api/v1/user').then((res)=>{
    setPosts(res.data)

   }).catch((err)=>{
    console.log('Erorr : ',err);
   });

  }
  // getResults()

console.log(posts)
 


  const dispatch = useDispatch();


  useEffect(() => {
  // getResults()

    dispatch(getUser())


  }, [dispatch])
  
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/account" element={<Login/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
};


export default App;
