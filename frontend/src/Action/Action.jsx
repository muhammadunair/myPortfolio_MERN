import axios from "axios";

export const getUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "GET_USER_REQUEST",
    });
    const { data } = await axios.get("/api/v1/user");
    console.log(data);

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
