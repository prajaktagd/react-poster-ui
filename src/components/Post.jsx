import PropTypes from "prop-types";
import styles from "./Post.module.css";
import { Link } from "react-router-dom";

const Post = (props) => {
  const { id, author, body } = props;

  return (
    <li className={styles.post}>
      <Link to={id}>
        <p className={styles.author}>{author}</p>
        <p className={styles.body}>{body}</p>
      </Link>
    </li>
  );
};

Post.propTypes = {
  id: PropTypes.string,
  author: PropTypes.string,
  body: PropTypes.string,
};

export default Post;
