import "./Home.css";
import propTypes from "prop-types";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Feed from "../../Components/Feed/Feed";

const Home = ({ sidebar }) => {
  return (
    <>
      <Sidebar sidebar={sidebar}></Sidebar>
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed />
      </div>
    </>
  );
};

Home.prototype = {
  sidebar: propTypes.bool,
};

export default Home;
