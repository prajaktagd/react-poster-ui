import PropTypes from "prop-types";
import styles from "./Post.module.css";

const Post = (props) => {
  const { author, body } = props;

  return (
    <li className={styles.post}>
      <p className={styles.author}>{author}</p>
      <p className={styles.body}>{body}</p>
    </li>
  );
};

Post.propTypes = {
  author: PropTypes.string,
  body: PropTypes.string,
};

export default Post;
