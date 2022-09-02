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

      // axios.get('/api/v1/user')
      // .catch(function (error) {
      //   if (error.response) {
      //     // The request was made and the server responded with a status code
      //     // that falls out of the range of 2xx
      //     console.log(error.response.data);
      //     setPosts(error.response.data.user)
      //     console.log(error.response.status);
      //     console.log(error.response.headers);
      //   } else if (error.request) {
      //     // The request was made but no response was received
      //     // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      //     // http.ClientRequest in node.js
      //     console.log(error.request);
      //   } else {
      //     // Something happened in setting up the request that triggered an Error
      //     console.log('Error', error.message);
      //   }
      //   console.log(error.config);
      // });



   axios.get('http://localhost:3001/api/v1/user').then((res)=>{
    setPosts(res.data)

   }).catch((err)=>{
    console.log('Erorr : ',err);
   });

  }
  getResults()

console.log(posts)
 


  // const dispatch = useDispatch();


  // useEffect(() => {
  //   dispatch(getUser())


  // }, [dispatch])
  
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
