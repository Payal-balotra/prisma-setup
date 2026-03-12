import express from 'express';

const port = 3000;
const app = express();

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    services: {
      server: 'up',
      //   database: dbStatus(),
    },
  });
});

app.listen(port, () => {
  console.log('Listing on port ', port);
});
