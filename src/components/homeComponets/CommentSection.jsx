import { useEffect, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const URL = "https://striveschool-api.herokuapp.com/api/comments";
  const myKey = import.meta.env.VITE_STRIVE_TOKEN;

  const fetchComments = async () => {
    try {
      const response = await fetch(URL, {
        headers: {
          Authorization: "Bearer " + myKey,
        },
      });
      if (!response.ok) throw new Error("Errore nella fetch");
      const data = await response.json();
      setComments(data.reverse().slice(0, 10));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + myKey,
        },
        body: JSON.stringify({
          comment: newComment,
          rate: 5,
          elementId: "default",
        }),
      });
      if (!response.ok) throw new Error("Errore nell'invio del commento");
      setNewComment("");
      fetchComments();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Col className="ms-0 my-2">
        <h6>{comments.length} commenti</h6>
      </Col>

      <Col>
        {comments.map((comment) => (
          <Col key={comment._id} className="ms-0 my-2 text-center">
            {comment.comment} • ⭐ {comment.rate}
            <hr />
          </Col>
        ))}
      </Col>

      <form onSubmit={handleSubmit}>
        <Form.Control
          placeholder="Scrivi un commento..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          required
          className="no-focus"
        />
        <br />
        <Button
          variant="info"
          className="ms-2 mb-2"
          type="submit"
          disabled={newComment.trim() === ""}
        >
          Commenta
        </Button>
      </form>
    </>
  );
};

export default CommentSection;
