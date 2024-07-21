import { useNavigate } from "react-router-dom";

import "./Share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
function Share() {
  const navigate = useNavigate();

  const HandleProfileClick = () => {
    navigate("/profile");
  };
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src="/assets/person/profile.jpg"
            alt=""
            onClick={HandleProfileClick}
          ></img>
          <input
            placeholder="What`s in your mind now?"
            className="shareInput"
          ></input>
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="gold" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}

export default Share;
