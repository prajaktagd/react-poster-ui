import { useEffect, useState } from "react";
import Header from "./components/Header";
import PostsList from "./components/PostsList";
import Modal from "./components/Modal";
import NewPost from "./components/NewPost";

function App() {
  const [isPosting, setIsPosting] = useState(false);
  const [posts, setPosts] = useState([]);

  const stopPostingHandler = () => setIsPosting(false);
  const startPostingHandler = () => setIsPosting(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const existingPosts = await fetch("http://localhost:8080/posts")
        .then((res) => res.json())
        .then((json) => json.posts);
      setPosts(existingPosts);
    };
    fetchPosts();
  }, []);

  const addPostHandler = (newPost) => {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: { "Content-Type": "application/json" },
    });

    setPosts((existingPosts) => [newPost, ...existingPosts]);
  };

  return (
    <>
      <Header onCreatePost={startPostingHandler} />
      <main>
        {isPosting && (
          <Modal onClose={stopPostingHandler}>
            <NewPost onClose={stopPostingHandler} onAddPost={addPostHandler} />
          </Modal>
        )}
        <PostsList posts={posts} />
      </main>
    </>
  );
}

export default App;
