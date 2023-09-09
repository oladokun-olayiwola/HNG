const express = require("express")
const moment = require("moment")
const app = express()

// Function to get the current UTC time within a +/-2 minute window
const getCurrentUTCTime = () => {
  const date =  new Date().toISOString();
  return date;
};

  app.get('/api', (req, res) => {
    const slackName = req.query.slack_name;
    const track = req.query.track;
  
    // Get the current day of the week
    const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  
    // Get the current UTC time within a +/-2 minute window
    const currentUTCTime = moment.utc().format()
  
    // GitHub file and repository URLs
    const githubFileURL = 'https://github.com/oladokun-olayiwola/HNG/blob/main/stage/index.js';
    const githubRepoURL = 'https://github.com/oladokun-olayiwola/HNG/blob/main/stage';
  
    // Prepare the JSON response
    const response = {
      slack_name: slackName,
      current_day: currentDay,
      utc_time: currentUTCTime,
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