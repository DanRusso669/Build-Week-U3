import { useEffect, useState } from "react";

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
      setComments(data.reverse().slice(0, 20));
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
              <form onSubmit={handleEditSubmit} style={{ display: "inline" }}>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  required
                />
                <button type="submit">Salva</button>
                <button type="button" onClick={cancelEdit}>
                  Annulla
                </button>
              </form>
            ) : (
              <>
                {comment.comment} • ⭐ {comment.rate}{" "}
                <button onClick={() => startEditing(comment)}>Modifica</button>{" "}
                <button onClick={() => handleDelete(comment._id)}>
                  Elimina
                </button>
              </>
            )}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Scrivi un commento..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          required
          rows={3}
          cols={40}
        />
        <br />
        <button type="submit" disabled={newComment.trim() === ""}>
          Invia commento
        </button>
      </form>
    </>
  );
};

export default CommentSection;
