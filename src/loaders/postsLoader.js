const postsLoader = async () => {
  return await fetch("http://localhost:8080/posts")
    .then((res) => res.json())
    .then((json) => json.posts);
};

export default postsLoader;
