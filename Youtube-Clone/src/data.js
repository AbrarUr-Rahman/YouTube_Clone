// const API_KEY1 = "AIzaSyDCKb2UeckGmLhH-ivk48lcmmh0uX88sJE";
// const API_KEY2 = "AIzaSyDGH3QWRlfMpdsmukzhQkkqStkh8cjOQTc";
const API_KEY3 = "AIzaSyAFG7mokn98_NFbITTPz5pZFxgXEWIufDI";

// try {
//   const checkApiUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
// } catch (error) {}

export const API_KEY = API_KEY3;

export const value_converter = (value) => {
  if (value > 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
