import {useState} from "react";
import "./AddVideo.css";
function AddVideo() {
  const [video, setVideo] = useState({
    channel: "The Compass Club",
    verified: true,
    time: "1 month ago",
  });

  function handleSubmit() {}
  function handleChnage(e) {
    console.log(e.target.name, e.target.value);
    setVideo({...video,
    [e.target.name]: e.target.value})
   
    console.log(video);
  }
  return (

    <form>
      <input
        type="text"
        name="title"
        onChange={handleChnage}
        placeholder="Video"
      />
      <input
        type="text"
        name="views"
        onChange={handleChnage}
        placeholder="Views"
      />
      <button
        className="button"
        onClick={handleSubmit}
        // onClick={() => {
        //   setVideos([
        //     ...videos,
        //     {
        //       id: videos.length + 1,
        //       title: "Full Stack",
        //       views: "15k",
        //       time: "6 months ago",
        //       channel: "The Compass",
        //       url: "https://marketplace.canva.com/EAFVCFkAg3w/1/0/1131w/canva-red-and-black-horror-movie-poster-AOBSIAmLWOs.jpg",
        //       verified: false,
        //     },
        //   ]);
        // }}
      >
        Add Videos
      </button>
    </form>
  );
}
export default AddVideo;
