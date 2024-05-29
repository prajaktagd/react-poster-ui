import { useState } from "react";
import Header from "./components/Header";
import PostsList from "./components/PostsList";

function App() {
  const [isPosting, setIsPosting] = useState(false);

  const stopPosting = () => setIsPosting(false);
  const startPosting = () => setIsPosting(true);

  return (
    <>
      <Header onCreatePost={startPosting} />
      <main>
        <PostsList isPosting={isPosting} onStopPosting={stopPosting} />
      </main>
    </>
  );
}

export default App;
