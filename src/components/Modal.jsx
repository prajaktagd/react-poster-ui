import PropTypes from "prop-types";
import styles from "./Modal.module.css";

const Modal = (props) => {
  const { children, onHideModal } = props;

  return (
    <>
      <div className={styles.backdrop} onClick={onHideModal} />
      <dialog open className={styles.modal}>
        {children}
      </dialog>
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.element,
  onHideModal: PropTypes.func,
};

export default Modal;
