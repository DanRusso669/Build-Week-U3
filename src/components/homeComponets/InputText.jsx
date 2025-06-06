import { useState } from "react";
import { Form } from "react-bootstrap";

const InputText = () => {
  const [text, setText] = useState("");
  const token = import.meta.env.VITE_STRIVE_TOKEN;

  const fetchPost = async (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify({ text }),
        });

        if (!response.ok) {
          throw new Error("Errore nella fetch POST");
        }

        setText("");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <Form.Control
      type="text"
      id="createPost"
      aria-describedby="createNewPost"
      className="rounded-pill bg-tertiary p-2 newPost no-focus postNewHover"
      placeholder="Crea un post"
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={fetchPost}
    />
  );
};

export default InputText;
