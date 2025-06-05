import { useEffect, useState } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { GlobeAmericasFill, ThreeDots, X } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const CardPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const URL = "https://striveschool-api.herokuapp.com/api/posts";
  const myKey = import.meta.env.VITE_STRIVE_TOKEN;

  const fetchPosts = async () => {
    try {
      const response = await fetch(URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + myKey,
        },
      });
      if (!response.ok) {
        throw new Error("Errore nella fetch");
      }
      const data = await response.json();

      setPosts(data.slice(120, 140));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {posts.map(post => (
        <Row key={post._id} className="mt-3 pt-3 border border rounded-3 ">
          <Col xs={2}>
            <Image src={post.user.image} alt="profileImage" className="imgProfiles ms-2 mt-2 me-1" />
          </Col>
          <Col xs={10}>
            <Row className="justify-content-between">
              <Col xs={6} className="pt-2 me-1">
                <Link to={`/profilo/${post.user._id}`} className="h6 m-0 text-decoration-none">
                  {post.user.name + " " + post.user.surname}
                </Link>
                <p>{post.user.area}</p>
                <p className="text-secondary m-0 paragraf">{post.user.username}</p>
                <span className="paragraf">
                  5 giorni • <GlobeAmericasFill />
                </span>
              </Col>
              <Col xs={2}>
                <Button variant="trasparent" className="fs-6 p-0">
                  <ThreeDots />
                </Button>
                <Button variant="trasparent" className="fs-6 p-0">
                  <X />
                </Button>
              </Col>
            </Row>
          </Col>
          <Col xs={12} className="m-2">
            {post.text}
          </Col>
        </Row>
      ))}
    </>
  );
};

export default CardPost;
