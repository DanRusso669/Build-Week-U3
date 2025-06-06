import { format, parseISO } from "date-fns";
import { useEffect, useState } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { GlobeAmericasFill, ThreeDots, X } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import ButtonsPost from "./ButtonsPost";
import { fetchPosts } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import CommentSection from "./CommentSection";

const CardPost = () => {
  const posts = useSelector((state) => state.posts.content);
  const dispatch = useDispatch();
  const [openComments, setOpenComments] = useState({});

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const toggleComments = (postId) => {
    setOpenComments((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  return (
    <>
      {posts.map((post) => (
        <Row key={post._id} className="mt-3 pt-3 border border rounded-3 ">
          <Col xs={2}>
            <Image
              src={post.user.image}
              alt="profileImage"
              className="imgProfiles ms-2 mt-2 me-1"
            />
          </Col>
          <Col xs={10}>
            <Row className="justify-content-between">
              <Col xs={6} className="pt-2 me-1">
                <Link
                  to={`/profilo/${post.user._id}`}
                  className="h6 m-0 text-decoration-none"
                >
                  {post.user.name + " " + post.user.surname}
                </Link>
                <p>{post.user.area}</p>
                <p className="text-secondary m-0 paragraf">
                  {post.user.username}
                </p>
                <span className="paragraf">
                  {format(parseISO(post.createdAt), "PPpp")} •{" "}
                  <GlobeAmericasFill />
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
          <Col>
            {post.image && (
              <Image
                src={post.image}
                alt="profilePost"
                className="imgPost my-3 me-3"
              />
            )}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleComments(post._id);
              }}
              className="text-decoration-none text-primary m-1"
            >
              {openComments[post._id] ? "Nascondi commenti" : "Mostra commenti"}
            </a>
            {openComments[post._id] && <CommentSection elementId={post._id} />}
            {!openComments[post._id] && <ButtonsPost />}
          </Col>
        </Row>
      ))}
    </>
  );
};

export default CardPost;
