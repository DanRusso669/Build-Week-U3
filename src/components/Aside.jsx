import ButtonShowAll from "./ButtonShowAll";
import OtherProfiles from "./OtherProfiles";
import { useEffect, useState } from "react";

const Aside = ({ title, button }) => {
  const [profiles, setProfiles] = useState([]);

  const URL = "https://striveschool-api.herokuapp.com/api/profile";
  const myKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODNlYjRiM2IxMGJmMDAwMTVjZjIyYTUiLCJpYXQiOjE3NDg5Mzk5NTUsImV4cCI6MTc1MDE0OTU1NX0.zh-IjjvBH7lFylWQ859wQLX3ikU4PgAHgAvYStILYGo";

  const fetchProfiles = async () => {
    try {
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + myKey,
        },
      });
      if (!response.ok) {
        throw new Error("Errore nella fetch");
      }
      const data = await response.json();
      // console.log(data);
      setProfiles(data);
      // console.log(profiles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);
  return (
    <>
      <div className="bg-light rounded p-3 mt-4 rounded-bottom-0 border-bottom-0">
        <h3 className="text-dark">{title}</h3>
        {(title === "Persone che potresti conoscere" && (
          <p> Dalla scuola o l'Università</p>
        )) ||
          (title === "Potrebbe interessarti" && <p>Pagine per te</p>)}
        {profiles.slice(0, 5).map((profile) => (
          <OtherProfiles
            key={profile._id}
            profile={profile}
            button={button}
            title={title}
          />
        ))}
      </div>
      <ButtonShowAll />
    </>
  );
};
export default Aside;
