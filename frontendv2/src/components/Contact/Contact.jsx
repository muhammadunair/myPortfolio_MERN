import React, { useEffect, useState } from "react";
import { Button } from 'antd';
import "./contact.css";
import { useDispatch, useSelector } from "react-redux";
 import { contactUs } from "../../Action/Action";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const {loading, message, error} = useSelector((state)=> state.update);
  const {
    message: alertMessage,
    error,
    loading,
  } = useSelector((state) => state.update);

  const dispatch = useDispatch();
   const contactFormHandler = (e) => {
    e.preventDefault();
    dispatch(contactUs(name, email, message));
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "CLEAR_ERRORS" });
    }
    if (alertMessage) {
      toast.success(alertMessage);
      dispatch({ type: "CLEAR_MESSAGE" });
    }
  }, [ error, alertMessage, dispatch]);
  return (
    <div className="contact">
      <div className="contactRightBar"></div>

      <div className="contactContainer">
        <form className="contactContainerForm" onSubmit={contactFormHandler}>
          <h4>Contact Us</h4>

          <input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            placeholder="Message"
            required
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <Button type="primary" disabled={loading}>
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
