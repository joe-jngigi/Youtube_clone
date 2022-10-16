import axios from "axios";

const FETCH_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
//   method: 'GET', ==> Remove the get request as this will happen through axios 
  url: FETCH_URL,
  params: {
    // Params can be removed, (leave maxResults)
    relatedToVideoId: '7ghhRHRP6t4',
    part: 'id,snippet',
    type: 'video',
    maxResults: '50'
  },
  headers: {
    // The key will be from the .env file
    // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_KEY_API,
    // bf34f912d8mshb4623cbaf7c0d49p1b09ecjsn68512d268b30

    'X-RapidAPI-Key': 'bf34f912d8mshb4623cbaf7c0d49p1b09ecjsn68512d268b30',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchapi = async (url ) =>{
  // Whatever request made, we start from the base URL
  // /url ==> Allows us to get fetchurl/getChannel or whatever url request
  // Can use 'response' but we get to destructure the data we get to return data
  const { data } = await axios.get(`${FETCH_URL}/${url}`, options)
  
  return data;
}