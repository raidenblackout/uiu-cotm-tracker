const {
  InteractionResponseType,
  InteractionType,
  verifyKeyMiddleware,
} = require("discord-interactions");
const express = require("express");
const { get } = require("http");
const app = express();

// app.get('/',(req,res)=>{
//   res.setHeader('Content-Type', 'text/html');
//   // res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
//   res.send("Hello World!");
// });
app.post('/api', verifyKeyMiddleware('4fb933cfe1d3038b611d700d6f7a12f3843f03ba20bded60da82f37cbcb07d4b'), (req, res) => {
  const message = req.body;
  if (message.type === InteractionType.APPLICATION_COMMAND) {
    res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: 'Hello world',
      },
    });
  }else if (message.type === InteractionType.PING) {
    console.log("Handling Ping request");
    response.send({
      type: InteractionResponseType.PONG,
    });
  }
});

module.exports = app;