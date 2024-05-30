import { useLoaderData, Link } from "react-router-dom";
import Modal from "../components/Modal";
import styles from "./PostDetails.module.css";

const PostDetails = () => {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <div className={styles.details}>
          <h2>Could not find post</h2>
          <p>Unfortunately, the requested post could not be found.</p>
          <Link to=".." className={styles.btn}>
            Okay
          </Link>
        </div>
      </Modal>
    );
  }

  return (
    <Modal>
      <div className={styles.details}>
        <p className={styles.author}>{post.author}</p>
        <p className={styles.text}>{post.body}</p>
      </div>
    </Modal>
  );
};

export default PostDetails;
