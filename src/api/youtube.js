import axios from "axios";

const YOUTUBE_KEY = "AIzaSyBTTL__V4I4l82f1hFWpa2clVOfjnGdnO0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: YOUTUBE_KEY,
  },
});
