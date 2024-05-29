import PropTypes from "prop-types";
import styles from "./Modal.module.css";

const Modal = (props) => {
  const { children, onClose } = props;

  return (
    <>
      <div className={styles.backdrop} onClick={onClose} />
      <dialog open className={styles.modal}>
        {children}
      </dialog>
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.element,
  onClose: PropTypes.func,
};

export default Modal;
