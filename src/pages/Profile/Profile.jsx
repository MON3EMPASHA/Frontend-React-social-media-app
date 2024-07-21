import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Profile.css";
function Profile() {
  return (
    <>
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/person/cover2.jpg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/profile.jpg"
                alt=""
              />
              <div className="profileInfo">
                <h4 className="profileInfoName">Abdelmonem Hatem</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
              </div>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed Flag="Profile" />
            <Rightbar Flag="Profile" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
