require('dotenv').config();
const EleventyFetch = require("@11ty/eleventy-fetch");

async function getTopStories() {
	const category = 'technology';
  let key = process.env.NYT_API_KEY;
	const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${category}&api-key=${process.env.NYT_API_KEY}`;
	const response = EleventyFetch(url, {
		duration: "1d", 
		type: "json"
	});
	const articles = response;
	return articles;
}
module.exports = getTopStories;