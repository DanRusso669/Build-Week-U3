import { Form } from "react-bootstrap";

const InputText = () => {
  return (
    <Form.Control
      type="text"
      id="createPost"
      aria-describedby="createNewPost"
      className="rounded-pill bg-tertiary p-2 newPost no-focus postNewHover"
      placeholder="Crea un post"
    />
  );
};
export default InputText;
