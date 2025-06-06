import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Pencil, Trash3Fill } from "react-bootstrap-icons";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

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

  const handleDelete = async (commentId) => {
    try {
      const response = await fetch(`${URL}/${commentId}`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + myKey,
        },
      });
      if (!response.ok) throw new Error("Errore nella cancellazione");
      fetchComments();
    } catch (error) {
      console.log(error);
    }
  };

  const startEditing = (comment) => {
    setEditingId(comment._id);
    setEditingText(comment.comment);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    if (!editingText.trim()) return;

    const commentToEdit = comments.find((c) => c._id === editingId);
    if (!commentToEdit) return;

    try {
      const response = await fetch(`${URL}/${editingId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + myKey,
        },
        body: JSON.stringify({
          comment: editingText,
          rate: commentToEdit.rate,
          elementId: commentToEdit.elementId,
        }),
      });
      if (!response.ok) throw new Error("Errore nella modifica");
      setEditingId(null);
      setEditingText("");
      fetchComments();
    } catch (error) {
      console.log(error);
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditingText("");
  };

  return (
    <>
      <h6>{comments.length} commenti</h6>

      <ul>
        {comments.map((comment) => (
          <li key={comment._id} style={{ marginBottom: "1rem" }}>
            {editingId === comment._id ? (
              <Form onSubmit={handleEditSubmit} style={{ display: "inline" }}>
                <Form.Control
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  required
                />
                <Button type="submit">Salva</Button>
                <Button type="button" onClick={cancelEdit}>
                  Chiudi
                </Button>
              </Form>
            ) : (
              <>
                <Row className="m-3">
                  <Col xs={8}>
                    {comment.comment} • ⭐ {comment.rate}{" "}
                  </Col>
                  <Col xs={4}>
                    <Button
                      variant="success"
                      onClick={() => startEditing(comment)}
                    >
                      <Pencil />
                    </Button>{" "}
                    <Button
                      variant="danger"
                      className="fs-6"
                      onClick={() => handleDelete(comment._id)}
                    >
                      <Trash3Fill />
                    </Button>
                  </Col>
                </Row>
              </>
            )}
          </li>
        ))}
      </ul>

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
