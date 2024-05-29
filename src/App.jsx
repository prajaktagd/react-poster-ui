import { useEffect, useState } from "react";
import Header from "./components/Header";
import PostsList from "./components/PostsList";
import Modal from "./components/Modal";
import NewPost from "./components/NewPost";
import styles from "./App.module.css";

function App() {
  const [isPosting, setIsPosting] = useState(false);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const stopPostingHandler = () => setIsPosting(false);
  const startPostingHandler = () => setIsPosting(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const existingPosts = await fetch("http://localhost:8080/posts")
        .then((res) => res.json())
        .then((json) => json.posts);
      setPosts(existingPosts);
      setIsLoading(false);
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

  const postsHtml = <PostsList posts={posts} />;
  const noPostsHtml = (
    <div className={styles.noPosts}>There are no posts yet!</div>
  );
  const loadingHtml = <div className={styles.loading}>Loading posts...</div>;

  return (
    <>
      <Header onCreatePost={startPostingHandler} />
      <main>
        {isPosting && (
          <Modal onClose={stopPostingHandler}>
            <NewPost onClose={stopPostingHandler} onAddPost={addPostHandler} />
          </Modal>
        )}
        {isLoading ? loadingHtml : posts.length ? postsHtml : noPostsHtml}
      </main>
    </>
  );
}

export default App;
