export const GET_EXPERS = "GET_EXPERS";
export const GET_PROFILE = "GET_PROFILE";
export const GET_MY_PROFILE = "GET_MY_PROFILE";
export const GET_POSTS = "GET_POSTS";

export const getExpersAction = (data) => ({ type: GET_EXPERS, payload: data });
export const getProfile = (data) => ({ type: GET_PROFILE, payload: data });
export const getMyProfile = (data) => ({ type: GET_MY_PROFILE, payload: data });
export const getPostsAction = (data) => ({ type: GET_POSTS, payload: data });

const key = import.meta.env.VITE_STRIVE_TOKEN;
const id = import.meta.env.VITE_STRIVE_ID;

export const fetchExperiences = (userId = id) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, {
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

export const fetchProfile = (userId = "me") => {
  return async (dispatch) => {
    try {
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}`, {
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

export const fetchMyProfile = () => {
  return async (dispatch) => {
    try {
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/profile/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + key,
        },
      });

      if (resp.ok) {
        let myProfile = await resp.json();
        dispatch(getMyProfile(myProfile));
      } else {
        throw new Error("Errore nel recupero del profilo personale");
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

export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/posts", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + key,
        },
      });

      if (resp.ok) {
        const data = await resp.json();

        const newPosts = data.reverse().slice(0, 20);
        dispatch(getPostsAction(newPosts));
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  };
};
