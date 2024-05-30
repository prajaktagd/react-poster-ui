import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NewPost.module.css";
import Modal from "../components/Modal";

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
    <Modal>
      <form className={styles.form} onSubmit={submitHandler}>
        <div>
          <label htmlFor="body">Text</label>
          <textarea id="body" rows={3} required onChange={bodyChangeHandler} />
        </div>
        <div>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required
            onChange={authorChangeHandler}
          />
        </div>
        <div className={styles.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </div>
      </form>
    </Modal>
  );
};

NewPost.propTypes = {
  onClose: PropTypes.func,
  onAddPost: PropTypes.func,
};

export default NewPost;
