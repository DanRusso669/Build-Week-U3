import { Col, Container, Row } from "react-bootstrap";
import OtherProfiles from "./OtherProfiles";
import { useEffect, useState } from "react";

const Aside = () => {
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
      console.log(data);
      setProfiles(data);
      console.log(profiles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col className="col-8">Prova</Col>
          <Col className="col-4">
            <h3 className="text-dark">Altri profili per te</h3>
            {profiles.slice(0, 10).map((profile) => (
              <OtherProfiles key={profile._id} profile={profile} />
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Aside;
