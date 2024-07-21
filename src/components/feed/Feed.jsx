import "./Feed.css";
import Share from "../share/Share";
import Post from "../Post/Post";
import { Posts, MyPosts } from "../../Data";
function Feed({ Flag }) {
  if (Flag === "Home") {
    return (
      <div className="feed">
        <div className="feedWrapper">
          <Share />
          {Posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="feed">
        <div className="feedWrapper">
          <Share />
          {MyPosts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    );
  }
}

export default Feed;
