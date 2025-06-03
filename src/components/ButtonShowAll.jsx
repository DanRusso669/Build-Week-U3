import { ArrowRightShort } from "react-bootstrap-icons";

const ButtonShowAll = () => {
  return (
    <>
      <div className="d-flex justify-content-center rounded-bottom-3 buttonShowMore border p-2">
        <a href="#">
          <span>Mostra altro</span>
          <ArrowRightShort className="iconaButton" />
        </a>
      </div>
    </>
  );
};

export default ButtonShowAll;
