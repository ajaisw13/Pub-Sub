// server.js
const express = require("express");
const app = express();
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID';
const data = JSON.stringify({foo: 'bar'});

// Imports the Google Cloud client library
const {PubSub} = require('@google-cloud/pubsub');

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function publishMessage() {
  // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject)
  const dataBuffer = Buffer.from(data);

  try {
    const messageId = await pubSubClient
      .topic(test-topic)
      .publishMessage({data: dataBuffer});
    console.log(`Message ${messageId} published.`);
  } catch (error) {
    console.error(`Received error while publishing: ${error.message}`);
    process.exitCode = 1;
  }
}

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  res.json({
    id,
    name: `John Doe #${id}`
  });

publishMessage();
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});