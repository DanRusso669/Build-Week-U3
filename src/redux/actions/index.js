export const GET_EXPERS = "GET_EXPERS";
export const GET_PROFILE = "GET_PROFILE";

export const getExpersAction = (data) => ({ type: GET_EXPERS, payload: data });
export const getProfile = (data) => ({ type: GET_PROFILE, payload: data });

const key = import.meta.env.VITE_STRIVE_TOKEN;
const id = import.meta.env.VITE_STRIVE_ID;

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

        dispatch(getExpersAction(arrExp));
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchProfile = () => {
  return async (dispatch) => {
    try {
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/profile/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + key,
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

export const manipulateExperiences = (method, newExp = {}, expId = "") => {
  return async (dispatch) => {
    try {
      const resp = await fetch(
        method === "POST"
          ? `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/`
          : `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/${expId}`,
        {
          method: method,
          body: method !== "DELETE" ? JSON.stringify(newExp) : undefined,
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + key,
          },
        }
      );

      if (resp.ok) {
        dispatch(fetchExperiences());
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  };
};
