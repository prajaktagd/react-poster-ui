import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styles from "./Modal.module.css";

const Modal = (props) => {
  const { children } = props;
  const navigate = useNavigate();

  const closeHandler = () => navigate("..");

  return (
    <>
      <div className={styles.backdrop} onClick={closeHandler} />
      <dialog open className={styles.modal}>
        {children}
      </dialog>
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.element,
};

export default Modal;
