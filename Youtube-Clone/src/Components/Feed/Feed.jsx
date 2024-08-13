import "./Feed.css";
// import thumbnail1 from "../../assets/thumbnail1.png";
// import thumbnail2 from "../../assets/thumbnail2.png";
// import thumbnail3 from "../../assets/thumbnail3.png";
// import thumbnail4 from "../../assets/thumbnail4.png";
// import thumbnail5 from "../../assets/thumbnail5.png";
// import thumbnail6 from "../../assets/thumbnail6.png";
// import thumbnail7 from "../../assets/thumbnail7.png";
// import thumbnail8 from "../../assets/thumbnail8.png";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import { API_KEY } from "../../data";
import { useEffect, useState } from "react";
import { value_converter } from "../../data";
import moment from "moment";

const Feed = ({ category }) => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}
`;
    await fetch(videoList_url)
      .then((res) => res.json())
      .then((data) => setData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  //@ Not Working return statement
  //   return (
  //     <div className="feed">
  //       return(
  //       {data.map((item, index) => {
  //         <Link to={`video/20/4521`} className="card">
  //           {/* //! React router dom link property */}
  //           <img src={thumbnail1} alt="" />
  //           <h2>Best channel to plan your next travel destination</h2>
  //           <h3>Great Ishmam</h3>
  //           <p>15k views &bull; 2 days ago</p>
  //         </Link>;
  //       })}
  //       )
  //     </div>
  //   );
  // };

  //#Fixed Code
  // return (
  //     <div className="feed">
  //       {data.map((item, index) => (
  //         <Link to={`video/${item.id}`} key={index} className="card">
  //           <img src={item.snippet.thumbnails.default.url} alt={item.snippet.title} />
  //           <h2>{item.snippet.title}</h2>
  //           <h3>{item.snippet.channelTitle}</h3>
  //           <p>{`${item.statistics.viewCount} views • ${new Date(item.snippet.publishedAt).toLocaleDateString()}`}</p>
  //         </Link>
  //       ))}
  //     </div>
  //   );
  // };

  return (
    <div className="feed">
      {data.map((item, index) => (
        <Link
          to={`video/${item.snippet.category}/${item.id}`}
          className="card"
          key={index}
        >
          {/* //! React router dom link property */}
          <img src={item.snippet.thumbnails.medium.url} alt="" />
          <h2>{item.snippet.title}</h2>
          <h3>{item.snippet.channelTitle}</h3>
          <p>
            {value_converter(item.statistics.viewCount)} &bull;{" "}
            {moment(item.snippet.publishedAt).fromNow()}
          </p>
        </Link>
      ))}
    </div>
  );
};

Feed.propTypes = {
  category: propTypes.number,
};

export default Feed;
