import { useState } from "react";
import Header from "./components/Header";
import PostsList from "./components/PostsList";

function App() {
  const [shouldShowModal, setShouldShowModal] = useState(false);

  const hideModal = () => setShouldShowModal(false);
  const showModal = () => setShouldShowModal(true);

  return (
    <>
      <Header onCreatePost={showModal} />
      <main>
        <PostsList shouldShowModal={shouldShowModal} onHideModal={hideModal} />
      </main>
    </>
  );
}

export default App;
