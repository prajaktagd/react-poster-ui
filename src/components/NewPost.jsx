import PropTypes from "prop-types";
import styles from "./NewPost.module.css";
import { useState } from "react";

const NewPost = (props) => {
  const { onClose, onAddPost } = props;

  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  const bodyChangeHandler = (event) => setBody(event.target.value);
  const authorChangeHandler = (event) => setAuthor(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();
    const newPost = { author, body };
    onAddPost(newPost);
    onClose();
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div>
        <label htmlFor="body">Text</label>
        <textarea id="body" rows={3} required onChange={bodyChangeHandler} />
      </div>
      <div>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler} />
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
  onClose: PropTypes.func,
  onAddPost: PropTypes.func,
};

export default NewPost;
