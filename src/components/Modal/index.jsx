import Fade from "@material-ui/core/Fade";
import FloatButton from "../FloatButton";
import CloseIcon from "@material-ui/icons/Close";
import { useModal } from "../../contexts/Modal";
import { ModalContainer } from "./style";

const Modal = ({ children }) => {
  const { isVisible, handleModal } = useModal();

  return (
    <>
      <Fade in={isVisible}>
        <ModalContainer>
          <div className="modal">
            <FloatButton
              icon={CloseIcon}
              title="Fechar"
              onClick={handleModal}
            />
            {children}
          </div>
        </ModalContainer>
      </Fade>
    </>
  );
};

export default Modal;
