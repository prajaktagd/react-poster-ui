const postLoader = async ({ params }) => {
  return await fetch("http://localhost:8080/posts/" + params.id)
    .then((res) => res.json())
    .then((json) => json.post || null);
};

export default postLoader;
