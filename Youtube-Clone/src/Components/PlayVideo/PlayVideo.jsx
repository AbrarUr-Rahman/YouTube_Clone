import "./PlayVideo.css";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";
import { useEffect, useState } from "react";
import { API_KEY } from "../../data";
import { value_converter } from "../../data";
import moment from "moment";

const PlayVideo = ({ videoId }) => {
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);

  const fetchVideoData = async () => {
    //#Fetching video data

    const videoDetailsUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;

    await fetch(videoDetailsUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));
  };
  const fetchOtherData = async () => {
    //# Fetching channel data
    const channelDataUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;

    await fetch(channelDataUrl)
      .then((res) => res.json())
      .then((data) => setChannelData(data.items[0]));
  };

  useEffect(() => {
    fetchVideoData();
  }, []);

  useEffect(() => {
    fetchOtherData();
  }, []);

  return (
    <>
      <div className="play-video">
        {/* <video src={video1} controls autoPlay muted></video> */}
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>
        <div className="play-video-info">
          <p>
            {apiData ? value_converter(apiData.statistics.viewCount) : "16K"}
            Views &bull;{" "}
            {apiData
              ? moment(apiData.snippet.publishedAt).fromNow()
              : "No Time"}
          </p>
          <div>
            <span>
              <img src={like} alt="" />
              {apiData ? value_converter(apiData.statistics.likeCount) : 155}
            </span>
            <span>
              <img src={dislike} alt="" />
            </span>
            <span>
              <img src={share} alt="" />
              Share
            </span>
            <span>
              <img src={save} alt="" />
              Save
            </span>
          </div>
        </div>
        <hr />
        <div className="publisher">
          <img
            src={channelData ? channelData.snippet.thumbnails.default.url : ""}
            alt=""
          />
          <div>
            <p>{apiData ? apiData.snippet.channelTitle : ""}</p>
            <span>
              {channelData
                ? value_converter(channelData.statistics.subscriberCount)
                : ""}
              Subscribers
            </span>
          </div>
          <button>Subscribe</button>
        </div>
        <div className="vid-description">
          <p>{apiData ? apiData.snippet.description.slice(0, 250) : ""}</p>
          <hr />
          <h4>
            {apiData ? value_converter(apiData.statistics.commentCount) : 102}{" "}
            Comments
          </h4>
          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>
                Jack the Ripper <span>1 day ago</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                non ea recusandae iusto necessitatibus nostrum ipsa reiciendis
                perferendis tempora deleniti.
              </p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>255</span>
                <img src={dislike} alt="" />
                <span>13</span>
              </div>
            </div>
          </div>
          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>
                Jack the Ripper <span>1 day ago</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                non ea recusandae iusto necessitatibus nostrum ipsa reiciendis
                perferendis tempora deleniti.
              </p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>255</span>
                <img src={dislike} alt="" />
                <span>13</span>
              </div>
            </div>
          </div>
          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>
                Jack the Ripper <span>1 day ago</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                non ea recusandae iusto necessitatibus nostrum ipsa reiciendis
                perferendis tempora deleniti.
              </p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>255</span>
                <img src={dislike} alt="" />
                <span>13</span>
              </div>
            </div>
          </div>
          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>
                Jack the Ripper <span>1 day ago</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                non ea recusandae iusto necessitatibus nostrum ipsa reiciendis
                perferendis tempora deleniti.
              </p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>255</span>
                <img src={dislike} alt="" />
                <span>13</span>
              </div>
            </div>
          </div>
          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>
                Jack the Ripper <span>1 day ago</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                non ea recusandae iusto necessitatibus nostrum ipsa reiciendis
                perferendis tempora deleniti.
              </p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>255</span>
                <img src={dislike} alt="" />
                <span>13</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayVideo;
