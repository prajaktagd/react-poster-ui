import { useState } from "react";
import PropTypes from "prop-types";
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
import styles from "./PostsList.module.css";

const PostsList = (props) => {
  const { shouldShowModal, onHideModal } = props;

  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");

  return (
    <>
      {shouldShowModal && (
        <Modal onHideModal={onHideModal}>
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

PostsList.propTypes = {
  shouldShowModal: PropTypes.bool,
  onHideModal: PropTypes.func,
};

export default PostsList;
