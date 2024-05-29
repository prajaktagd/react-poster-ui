import PropTypes from "prop-types";
import Post from "./Post";
import styles from "./PostsList.module.css";

const PostsList = (props) => {
  const { posts } = props;

  const listOfPosts = (
    <ul className={styles.posts}>
      {posts.map(({ author, body }) => (
        <Post key={author + body} author={author} body={body} />
      ))}
    </ul>
  );
  const noPosts = <div className={styles.noPosts}>There are no posts yet!</div>;

  return posts.length ? listOfPosts : noPosts;
};

PostsList.propTypes = {
  posts: PropTypes.array,
};

export default PostsList;
