const express = require("express")
const app = express()

// Function to get the current UTC time within a +/-2 minute window
const getCurrentUTCTime = () => {
  const now = new Date();
  const offset = now.getTimezoneOffset() / 60; // Convert to hours
  const utcTime = new Date(now.getTime() + offset * 60 * 60 * 1000);

  // Format UTC time as "YYYY-MM-DDTHH:MM:SSZ"
  const isoFormattedUTC = utcTime.toISOString();
  
  return isoFormattedUTC;
};

  app.get('/api', (req, res) => {
    const slackName = req.query.slack_name;
    const track = req.query.track;
  
    // Get the current day of the week
    const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  
    // Get the current UTC time within a +/-2 minute window
    const currentUTCTime = getCurrentUTCTime();
  
    // GitHub file and repository URLs
    const githubFileURL = 'https://github.com/oladokun-olayiwola/HNG/blob/main/stage/index.js';
    const githubRepoURL = 'https://github.com/oladokun-olayiwola/HNG/blob/main/stage';
  
    // Prepare the JSON response
    const response = {
      slack_name: slackName,
      current_day: currentDay,
      utc_time: currentUTCTime +- 2,
      track: track,
      github_file_url: githubFileURL,
      github_repo_url: githubRepoURL,
      status_code: 200,
    };
  
    res.json(response);
  });
  const PORT = process.env.PORT || 4000

app.on('error', console.error)
.listen(PORT, () => {
    console.log("Your server is running on port 4000 sir");
})