import { redirect } from "react-router-dom";

const newPostAction = async ({ request }) => {
  const newPost = Object.fromEntries(await request.formData());

  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: { "Content-Type": "application/json" },
  });

  return redirect("..");
};

export default newPostAction;
