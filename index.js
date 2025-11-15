// index.js - stock-service entrypoint
const { createServer } = require('./src/app');

const server = createServer();

const port = process.env.PORT || 3001;
server.listen(port, () => {
  console.log(`stock-service listening on port ${port}`);
});
