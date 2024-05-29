import PropTypes from "prop-types";
import styles from "./NewPost.module.css";

const NewPost = (props) => {
  const { onBodyChange, onAuthorChange, onClose } = props;

  return (
    <form className={styles.form}>
      <div>
        <label htmlFor="body">Text</label>
        <textarea id="body" rows={3} required onChange={onBodyChange} />
      </div>
      <div>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={onAuthorChange} />
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
        <button>Submit</button>
      </div>
    </form>
  );
};

NewPost.propTypes = {
  onBodyChange: PropTypes.func,
  onAuthorChange: PropTypes.func,
  onClose: PropTypes.func,
};

export default NewPost;
