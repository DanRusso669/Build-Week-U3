import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const ImageInput = ({ endpoint }) => {
  const [image, setImage] = useState(null);

  const handleImage = (e) => {
    const fileSelected = e.target.files[0];
    setImage(fileSelected);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    await fetch(endpoint, {
      method: "POST",
      body: formData,
    });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formFile" className="mb-2">
        <Form.Control
          type="file"
          accept="image/*,video/*"
          onChange={handleImage}
        />
      </Form.Group>
    </Form>
  );
};
export default ImageInput;
