export const HUMBERGER_LOGO =
  "https://cdn-icons-png.flaticon.com/512/8182/8182885.png";
export const YOUTUBE_LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png";


const BASE_URL = "https://youtube.googleapis.com/youtube/v3";
const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY

// export const YOUTUBE_VIDEO_API = `${BASE_URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=0&key=${YOUTUBE_API_KEY}`;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const YOUTUBE_CATAGORIES = `${BASE_URL}/videoCategories?part=snippet&regionCode=US&key=${YOUTUBE_API_KEY}`

export const formatViews = (views) => {
    if (views >= 1_000_000) return (views / 1_000_000).toFixed(1) + "M";
    if (views >= 1_000) return (views / 1_000).toFixed(1) + "K";
    return views;
  };


export const getYoutubeVideosByCategory = (categoryId = "0") =>
  `${BASE_URL}/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${YOUTUBE_API_KEY}`;



