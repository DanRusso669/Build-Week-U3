export const GET_EXPERS = "GET_EXPERS";

export const getExpersAction = (data) => ({ type: GET_EXPERS, payload: data });

const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODNlZmY5M2IxMGJmMDAwMTVjZjIyYmEiLCJpYXQiOjE3NDkwMjA3ODksImV4cCI6MTc1MDIzMDM4OX0.e6YtXrzZbqS3FiunbFVMoILNDdddgoEDMO06sAz2uNg";
const id = "683eff93b10bf00015cf22ba";

export const fetchExperiences = () => {
  return async (dispatch) => {
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

export const GET_PROFILE = "GET_PROFILE";
export const getProfile = (data) => ({ type: GET_PROFILE, payload: data });
const key2 = import.meta.env.VITE_STRIVE_TOKEN;
console.log(key2);

export const fetchProfile = () => {
  return async (dispatch) => {
    try {
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/profile/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + key2,
        },
      });

      if (resp.ok) {
        let oggProfile = await resp.json();
        dispatch(getProfile(oggProfile));
      } else {
        throw new Error("Errore nel recupero delle esperienze personali");
      }
    } catch (error) {
      console.error(error);
    }
  };
};
