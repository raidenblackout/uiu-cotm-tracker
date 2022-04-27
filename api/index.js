const {
  InteractionResponseType,
  InteractionType,
  verifyKeyMiddleware,
} = require("discord-interactions");
const express = require("express");
const app = express();

app.get('/api', (req, res) => {
  res.send("Hello World!");
});
app.post('/interactions', verifyKeyMiddleware('4fb933cfe1d3038b611d700d6f7a12f3843f03ba20bded60da82f37cbcb07d4b'), (req, res) => {
  const message = req.body;
  if (message.type === InteractionType.APPLICATION_COMMAND) {
    res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: 'Hello world',
      },
    });
  }
});

module.exports = app;