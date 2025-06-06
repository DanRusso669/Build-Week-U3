import CardPost from "./CardPost";
import { useState } from "react";
import CreatePost from "./CreatePost";
import ModaleNewPost from "./ModaleNewPost";

const CentralCard = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <>
      <CreatePost onOpenModal={handleOpenModal} />
      <ModaleNewPost show={showModal} handleClose={handleCloseModal} />
      <CardPost />
    </>
  );
};
export default CentralCard;
