const express = require('express');
const path = require('path');
const app = express();

// Run the app by serving the static files in the dist directory
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on PORT 3000`);
});
