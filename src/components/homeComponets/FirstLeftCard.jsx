import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../redux/actions";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const FirstLeftCard = () => {
  const profile = useSelector((state) => state.profile.content);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card className="rounded-3 mt-2 bg-white border">
      <div className="position-relative">
        <Card.Img
          src={profile.image}
          className="rounded-top-3 "
          style={{
            height: "4rem",
            objectFit: "cover",
            width: "100%",
            borderRadius: 0,
          }}
        />

        <img
          src={profile.image}
          alt="Foto profilo"
          style={{
            width: "4.5rem",
            height: "4.5rem",
            borderRadius: "50%",
            border: "3px solid white",
            position: "absolute",
            bottom: "-2.25rem",
            left: "20px",
            objectFit: "cover",
          }}
        />
      </div>

      <Card.Body className="pt-5 px-3 fontsize">
        <div className="d-flex flex-column">
          <Link to={"/profilo"} className="h5 text-decoration-none mb-1">
            {profile.name} {profile.surname}
          </Link>
          <p className="text-muted">{profile.title}</p>
          <p className="text-muted">{profile.area}</p>
          <Button variant="light" className="mt-2 border d-flex align-items-center gap-2">
            + Esperienza
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default FirstLeftCard;
