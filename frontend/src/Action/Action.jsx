import axios from "axios";

export const getUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "GET_USER_REQUEST",
    });
    let  {data}  = await axios.get(`http://localhost:3001/api/v1/user`);
     

    dispatch({
        type:"GET_USER_SUCCESS",
        payload:data.user,
    })
  } catch (error) {
    dispatch({
        type:"GET_USER_FAILure",
        payload:error.response.data.message,
    })
  }
};
