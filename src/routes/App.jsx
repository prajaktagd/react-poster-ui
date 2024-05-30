import { Outlet } from "react-router-dom";
import PostsList from "../components/PostsList";

const Posts = () => {
  return (
    <main>
      <PostsList />
      <Outlet />
    </main>
  );
};

export default Posts;

export const loader = async () => {
  return await fetch("http://localhost:8080/posts")
    .then((res) => res.json())
    .then((json) => json.posts);
};
