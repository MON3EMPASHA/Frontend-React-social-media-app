import "./Post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../Data";
import { useState } from "react";

function Post({ post }) {
  const [like, setlike] = useState(post.likes);
  const [isliked, setisliked] = useState(false);

  const likeHandler = () => {
    setisliked(!isliked);
    if (isliked === false) {
      setlike(like + 1);
    }
    if (isliked === true) {
      setlike(like - 1);
    }
  };

  const user = Users.find((u) => u.id === post.userId);
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={user.profilePicture} alt="" />
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.caption}</span>
          <img src={post.image} alt="" className="postPhoto" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeicon"
              src="assets/Like.png"
              alt=""
              onClick={likeHandler}
            />
            <img
              className="likeicon"
              src="assets/love.png"
              alt=""
              onClick={likeHandler}
            />
            <span className="likeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comments} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
