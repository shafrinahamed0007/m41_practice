
import React, { use } from "react";

const Posts = ({ postsPromise }) => {
  const posts = use(postsPromise);
  return <div>
    Posts :{posts.length}
    
  </div>;
};

export default Posts;
