import { useEffect, useState } from "react";

const CommentSection = ({ elementId }) => {
  const [comments, setComments] = useState([]);

  const URL = "https://striveschool-api.herokuapp.com/api/comments";
  const myKey = import.meta.env.VITE_STRIVE_TOKEN;

  const fetchComments = async () => {
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

      setComments(data.reverse().slice(0, 20));

      data.forEach((obj) => {
        console.log("Singolo commento:", obj);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  useEffect(() => {
    console.log("Comments aggiornati:", comments);
  }, [comments]);

  return (
    <>
      <h6>{comments.length} commenti </h6>
      <ul>
        {comments.map((comment) => (
          <li key={comment._id}>
            {comment.comment} • ⭐ {comment.rate}
          </li>
        ))}
      </ul>
    </>
  );
};
export default CommentSection;
