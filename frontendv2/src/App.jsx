import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { getUser, loadUser } from "./Action/Action";
import AdminPanel from "./components/Admin-panel/AdminPanel";
import Timeline from "./components/Admin-panel/Timeline";
import Projects from "./components/Projects/Projects";
import Project from "./components/Admin-panel/Project";
import Loader from "./loader/Loader";

const App = () => {
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.login);
  const { loading, user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser()); // Get user data
    dispatch(loadUser()); // Optionally load user data if required
  }, [dispatch]);
  

  return (
    <Router>
      {loading ? (
        <Loader/>
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home timelines={user?.timeline} skills={user?.skills} project={user?.project} />} />
            <Route path="/about" element={<About about={user?.about} />} />
            <Route path="/projects" element={<Projects project={user?.project} />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/account"
              element={isAuthenticated ? <AdminPanel /> : <Login />}
            />
            <Route
              path="/admin/timeline"
              element={isAuthenticated ? <Timeline /> : <Login />}
            />
            <Route
              path="/admin/project"
              element={isAuthenticated ? <Project /> : <Login />}
            />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
};

export default App;
