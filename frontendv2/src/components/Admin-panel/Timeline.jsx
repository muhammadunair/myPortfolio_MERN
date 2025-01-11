import React, { useEffect, useState } from "react";
 import { useDispatch, useSelector } from "react-redux";
import { deleteTimeline, addTimeline, getUser } from "../../Action/Action";
import { MdKeyboardBackspace, MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";
 import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { Button } from "antd";

const Timeline = () => {
  const { message, error, loading } = useSelector((state) => state.update);
  const { message: loginMessage } = useSelector((state) => state.login);

  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
 
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(addTimeline(title, description, date));
    dispatch(getUser());
  };

  const deleteHandler = async (id) => {
    await dispatch(deleteTimeline(id));
    dispatch(getUser());

  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "CLEAR_ERRORS" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "CLEAR_MESSAGE" });
    }
    if (loginMessage) {
      toast.success(loginMessage);
      dispatch({ type: "CLEAR_MESSAGE" });
    }
  }, [ error, message, dispatch,loginMessage]);
  return (
    <div className="adminPanel">
      <div className="adminPanelContainer">
        <h4  >
          <p>A</p>
          <p>D</p>
          <p>M</p>
          <p>I</p>
          <p style={{ marginRight: "1vmax" }}>N</p>

          <p>P</p>
          <p>A</p>
          <p>N</p>
          <p>E</p>
          <p>L</p>
        </h4>

        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="adminPanelInputs"
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="adminPanelInputs"
          />
          <input
            type="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="adminPanelInputs"
          />

          <Link to="/account">
            Back <MdOutlineKeyboardBackspace />
          </Link>

          <Button type="primary"   disabled={loading}>
            Add
          </Button>
        </form>

        <div className="adminPanelYoutubeVideos">
          {user &&
            user.timeline &&
            user.timeline.map((item) => (
              <div className="youtubeCard" key={item._id}>
                <h6>{item.title}</h6>
                <h6 style={{ letterSpacing: "2px" }}>
                  {item.description}
                </h6>
                <h6 style={{ fontWeight: "600" }}>
                  {item.date.toString().split("T")[0]}
                </h6>
                <Button
                type="primary"
                  style={{
                    margin: "auto",
                    display: "block",
                    color: "rgba(40,40,40,0.7)",
                  }}
                  onClick={()=>deleteHandler(item._id)}
                >
                  <FaTrash />
                </Button>
              </div>
            ))}
        </div>
       
      </div>
    </div>
  );
};
export default Timeline;
