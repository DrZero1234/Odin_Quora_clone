import { Post } from "./Post";

export const PostList = () => {
  return (
    <div className="mx-auto max-w-lg">
      <div className="flex flex-col">
        <Post />
        <Post />
      </div>
    </div>
  );
};
