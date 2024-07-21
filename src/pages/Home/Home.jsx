import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./Home.css";
function Home() {
  return (
    <>
      <div className="homeContainer">
        <Sidebar />
        <Feed Flag="Home" />
        <Rightbar Flag="Home" />
      </div>
    </>
  );
}

export default Home;
