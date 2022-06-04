import React, { useCallback, useEffect, useState } from "react";
import ModalContent from "./ModalContent";
import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";

const Modal = ({
  header = "Header",
  content = "Content",
  footer = "Footer",
}) => {
  const [isModalShown, setIsModalShown] = useState(false);

  const keyboardPressed = useCallback((event) => {
    if (event.keyCode === 27) {
      if (!isModalShown) {
        setIsModalShown(false);
        document.body.style.overflow = "auto";
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", keyboardPressed, false);

    return () => {
      document.removeEventListener("keydown", keyboardPressed, false);
    };
  }, [keyboardPressed]);

  const outsideClick = (event) => {
    if (event.target.id === "popupModal") {
      setIsModalShown(false);
      document.body.style.overflow = "auto";
    }
  };

  const toggleModal = () => {
    setIsModalShown(!isModalShown);
    if (isModalShown) {
      document.body.style.overflow = "auto";
      document.removeEventListener("click", outsideClick, false);
    } else {
      document.body.style.overflow = "hidden";
      document.addEventListener("click", outsideClick, false);
    }
  };

  return (
    <div>
      <button className="show-modal-btn" id="show-modal" onClick={toggleModal}>
        Show Modal
      </button>

      {isModalShown ? (
        <div id="popupModal" className="modal">
          <div className="modal-content">
            <ModalHeader>
              <h3>{header}</h3>
              <span id="close-btn" onClick={toggleModal}>
                &times;
              </span>
            </ModalHeader>
            <hr />
            <ModalContent>
              <p>{content}</p>
            </ModalContent>
            <hr />
            <ModalFooter>
              <h5>{footer}</h5>
            </ModalFooter>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
