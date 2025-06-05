import ButtonShowAll from "./ButtonShowAll";
import OtherProfiles from "./OtherProfiles";
import { useEffect, useState } from "react";

const Aside = ({ title, button }) => {
  const [profiles, setProfiles] = useState([]);

  const URL = "https://striveschool-api.herokuapp.com/api/profile";
  const myKey = import.meta.env.VITE_STRIVE_TOKEN;

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="bg-light rounded p-3 mt-4 rounded-bottom-0 border-bottom-0 border">
        <h4 className="text-dark">{title}</h4>
        {(title === "Persone che potresti conoscere" && (
          <p> Dalla scuola o l'Università</p>
        )) ||
          (title === "Potrebbe interessarti" && <p>Pagine per te</p>)}
        {profiles.slice(10, 15).map((profile) => (
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
