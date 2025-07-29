const axios = require('axios');

exports.getTutorials = async (req, res) => {
  const { objectName } = req.params;
  const { pageToken } = req.query; // Get pageToken from query params
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
  const query = `${objectName} repair tutorial`;

  let URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
    query
  )}&key=${YOUTUBE_API_KEY}&maxResults=9&type=video`;

  // Add pageToken to URL if it exists for the "Load More" feature
  if (pageToken) {
    URL += `&pageToken=${pageToken}`;
  }

  try {
    const response = await axios.get(URL);
    const tutorials = response.data.items.map((item) => ({
      videoId: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.high.url,
    }));
    
    // Send back both the tutorials and the token for the next page
    res.status(200).json({
      tutorials,
      nextPageToken: response.data.nextPageToken,
    });
  } catch (error) {
    console.error('Error fetching tutorials from YouTube:', error.message);
    res.status(500).json({ message: 'Failed to fetch tutorials' });
  }
};