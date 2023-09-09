const express = require("express")
const app = express()

// Function to get the current UTC time within a +/-2 minute window
function getCurrentUTCTime() {
    const now = new Date();
    const utcTime = new Date(now.getTime() + (now.getTimezoneOffset() + 2 * 60) * 60 * 1000); // Adjust for UTC+2
    return utcTime.toISOString();
  }

  app.get('/api', (req, res) => {
    const slackName = req.query.slack_name || 'example_name';
    const track = req.query.track || 'backend';
  
    // Get the current day of the week
    const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  
    // Get the current UTC time within a +/-2 minute window
    const currentUTCTime = getCurrentUTCTime();
  
    // GitHub file and repository URLs
    const githubFileURL = 'https://github.com/username/repo/blob/main/file_name.ext';
    const githubRepoURL = 'https://github.com/username/repo';
  
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

app.on('error', console.error)
.listen("4000", () => {
    console.log("YOur server is running on port 4k sir");
})