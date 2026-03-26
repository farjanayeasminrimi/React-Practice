import { use } from "react";

export default function Posts({ FetchPosts }) {
  const posts = use(FetchPosts);
  // console.log(posts);
  return (
    <div>
      <h1>All Posts: </h1>
    </div>
  );
}
