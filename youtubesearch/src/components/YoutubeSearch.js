import React, {useState} from "react";
import axios from "axios";
import "./youtubesearch.scss";
const YoutubeSearch = () => {
  const [query, setQuery] = useState("");
  const [videos, setVideos] = useState([]);
  const handleYoutubeSearch = async () => {
    let res = await axios({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        maxResults: "20",
        key: "AIzaSyDMTz5D60a_CI1vSfDRJlCT_YC5if5QkH8",
        q: query,
      },
    });
    if (res && res.data && res.data.items) {
      let raw = res.data.items;
      let result = [];
      if (raw && raw.length > 0) {
        raw.map((item) => {
          let object = {};
          object.id = item.id.videoId;
          object.title = item.snippet.title;
          object.createAt = item.snippet.publishedAt;
          object.author = item.snippet.channelTitle;
          object.description = item.snippet.description;
          result.push(object);
        });
      }
      setVideos(result);
    }
    console.log(res);
  };
  return (
    <div className="youtube-search-container">
      <h1>Youtube minisize</h1>
      <div className="search" placeholder="hay tim kiem video">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleYoutubeSearch}>Search</button>
      </div>
      {videos &&
        videos.length > 0 &&
        videos.map((item) => {
          return (
            <div className="yt-result" key={item.id}>
              <div className="left">
                <iframe
                  width="885"
                  height="498"
                  src={`https://www.youtube.com/embed/${item.id}`}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="right">
                <div className="title">{item.title}</div>
                <div className="created-at">13/12/12000</div>
                <div className="author">{item.author}</div>
                <div className="description">{item.description}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default YoutubeSearch;
