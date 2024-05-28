import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
import styles from "./PostsList.module.css";

const PostsList = () => {
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [shouldShowModal, setShouldShowModal] = useState(true);

  const hideModal = () => setShouldShowModal(false);

  return (
    <>
      {shouldShowModal && (
        <Modal onHideModal={hideModal}>
          <NewPost
            onBodyChange={(event) => setBody(event.target.value)}
            onAuthorChange={(event) => setAuthor(event.target.value)}
          />
        </Modal>
      )}
      <ul className={styles.posts}>
        <Post author={author} body={body} />
        <Post
          author="Harshada"
          body="Please reach out to us in case of any queries!"
        />
        <Post author="Devdatta" body="The new version will be available soon" />
      </ul>
    </>
  );
};

export default PostsList;
