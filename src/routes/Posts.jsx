import { Outlet, useLoaderData } from "react-router-dom";
import styles from "./Posts.module.css";
import Post from "../components/Post";

const Posts = () => {
  const posts = useLoaderData();

  const listOfPosts = (
    <ul className={styles.posts}>
      {posts.map(({ author, body, id }) => (
        <Post key={id} id={id} author={author} body={body} />
      ))}
    </ul>
  );
  const noPosts = <div className={styles.noPosts}>There are no posts yet!</div>;

  return (
    <main>
      {posts.length ? listOfPosts : noPosts}
      <Outlet />
    </main>
  );
};

export default Posts;
