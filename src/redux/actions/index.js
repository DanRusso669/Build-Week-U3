export const GET_EXPERS = "GET_EXPERS";

export const getExpersAction = data => ({ type: GET_EXPERS, payload: data });

const key = import.meta.env.VITE_STRIVE_TOKEN;
const id = import.meta.env.VITE_STRIVE_ID;

export const fetchExperiences = () => {
  return async dispatch => {
    try {
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + key,
        },
      });

      if (resp.ok) {
        let arrExp = await resp.json();
        console.log(arrExp);
        dispatch(getExpersAction(arrExp));
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  };
};
