import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import RouteLayout from "./routes/RouteLayout.jsx";
import Posts from "./routes/Posts.jsx";
import NewPost from "./routes/NewPost.jsx";
import PostDetails from "./routes/PostDetails.jsx";
import postsLoader from "./loaders/postsLoader.js";
import postLoader from "./loaders/postLoader.js";
import newPostAction from "./actions/newPostAction.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader,
        children: [
          { path: "/create-post", element: <NewPost />, action: newPostAction },
          { path: "/:id", element: <PostDetails />, loader: postLoader },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
