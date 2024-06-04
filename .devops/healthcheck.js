const http = require('http');

// Define the URL and port for the health check
const PORT = process.env.PORT;
const healthCheckURL = `http://localhost:${PORT}`;

// Define options for the HTTP request
const options = {
  method: 'HEAD', // Use HEAD request to only check the server status
  timeout: 5000 // Timeout in milliseconds
};

// Perform the health check
const req = http.request(healthCheckURL, options, (res) => {
  if (res.statusCode === 200) {
    console.log('Health check successful');
    process.exit(0); // Exit with success status
  } else {
    console.error(`Health check failed with status code ${res.statusCode}`);
    process.exit(1); // Exit with failure status
  }
});

// Handle errors during the request
req.on('error', (error) => {
  console.error('Health check failed:', error.message);
  process.exit(1); // Exit with failure status
});

// Set a timeout for the request
req.setTimeout(options.timeout, () => {
  console.error('Health check timed out');
  req.destroy(); // Destroy the request if it takes too long
});

// Send the request
req.end();
