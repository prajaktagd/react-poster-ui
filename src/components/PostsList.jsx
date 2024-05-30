import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import styles from "./PostsList.module.css";

const PostsList = () => {
  const posts = useLoaderData();

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

export default PostsList;
