import "./Rightbar.css";
import { Onlines } from "../../Data";
import Online from "../Online/Online";
import Profile from "../../pages/Profile/Profile";
function Rightbar({ Flag }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="assets/gift.png" className="birthdayImg" alt=""></img>
          <span className="birthdayText">
            <b>Youssef Bahloul </b>and <b>3 others friends</b> have their
            birthday today
          </span>
        </div>
        <img src="assets/ad.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Onlines.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Cairo</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Cairo</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/person/male/1.jpg"
              alt=""
              className="rightbarFollowingImg"
            ></img>
            <span className="rightbarFollowingName">Mohamed Omar</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/male/2.jpg"
              alt=""
              className="rightbarFollowingImg"
            ></img>
            <span className="rightbarFollowingName">Ahmed Hassan</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/female/1.jpg"
              alt=""
              className="rightbarFollowingImg"
            ></img>
            <span className="rightbarFollowingName">Layla Tarek</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/male/17.jpg"
              alt=""
              className="rightbarFollowingImg"
            ></img>
            <span className="rightbarFollowingName">Hany Magdy</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/female/17.jpg"
              alt=""
              className="rightbarFollowingImg"
            ></img>
            <span className="rightbarFollowingName">Shereen Omar</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/female/2.jpg"
              alt=""
              className="rightbarFollowingImg"
            ></img>
            <span className="rightbarFollowingName">Sara Ali</span>
          </div>
        </div>
      </>
    );
  };
  if (Flag === "Home") {
    return (
      <div className="rightbar">
        <div className="rightBarWrapper">
          <HomeRightbar />
        </div>
      </div>
    );
  } else {
    return (
      <div className="rightbar">
        <div className="rightBarWrapper">
          <ProfileRightbar />
        </div>
      </div>
    );
  }
}

export default Rightbar;
