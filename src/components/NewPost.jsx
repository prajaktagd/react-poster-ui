import PropTypes from "prop-types";
import styles from "./NewPost.module.css";

const NewPost = (props) => {
  const { onBodyChange, onAuthorChange } = props;

  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" rows={3} required onChange={onBodyChange} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={onAuthorChange} />
      </p>
    </form>
  );
};

NewPost.propTypes = {
  onBodyChange: PropTypes.func,
  onAuthorChange: PropTypes.func,
};

export default NewPost;
