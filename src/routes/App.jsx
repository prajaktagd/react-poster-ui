import { Outlet } from "react-router-dom";
import PostsList from "../components/PostsList";

const Posts = () => {
  const addPostHandler = (newPost) => {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: { "Content-Type": "application/json" },
    });

    // setPosts((existingPosts) => [newPost, ...existingPosts]);
  };

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
