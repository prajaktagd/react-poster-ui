import { useState } from "react";
import Header from "./components/Header";
import PostsList from "./components/PostsList";
import Modal from "./components/Modal";
import NewPost from "./components/NewPost";

function App() {
  const [isPosting, setIsPosting] = useState(false);
  const [posts, setPosts] = useState([]);

  const stopPostingHandler = () => setIsPosting(false);
  const startPostingHandler = () => setIsPosting(true);

  const addPostHandler = (newPost) => {
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
