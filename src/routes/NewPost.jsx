import { Form, Link } from "react-router-dom";
import styles from "./NewPost.module.css";
import Modal from "../components/Modal";

const NewPost = () => {
  return (
    <Modal>
      <Form method="post" className={styles.form}>
        <div>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" rows={3} required />
        </div>
        <div>
          <label htmlFor="author">Your name</label>
          <input type="text" id="author" name="author" required />
        </div>
        <div className={styles.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </div>
      </Form>
    </Modal>
  );
};

export default NewPost;
