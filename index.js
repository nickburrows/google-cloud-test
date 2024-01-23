const functions = require("@google-cloud/functions-framework");
const escapeHtml = require("escape-html");
const line = require("@line/bot-sdk");

const config = {
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.LINE_CHANNEL_SECRET,
};

const client = new line.messagingApi.MessagingApiClient({
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
});

const lineMiddleware = line.middleware(config);

functions.http("helloHttp", (req, res) => {
  res.send(`Hello ${escapeHtml(req.query.name || req.body.name || "World")}!`);
});

functions.http("callback", (req, res) => {
  lineMiddleware(req, res, err => {
    if (err) {
      console.error(err);
      res.status(500).end();
    } else {
      Promise.all(req.body.events.map(handleEvent))
        .then(result => res.json(result))
        .catch(err => {
          console.error(err);
          res.status(500).end();
        });
    }
  });
});

function handleEvent(event) {
  switch (event.type) {
    case "message":
      return handleMessage(event);
    case "follow":
      return handleFollow(event);
    // 您可以在此添加更多事件類型的處理
    default:
      return Promise.resolve(null);
  }
}

function handleMessage(event) {
  if (event.message.type === "text") {
    let response;

    switch (event.message.text.toLowerCase()) {
      case "hi":
        response = { type: "text", text: "A" }; // 當收到 "Hi" 時回應 "A"
        break;
      case "bye":
        response = { type: "text", text: "B" }; // 當收到 "Bye" 時回應 "B"
        break;
      default:
        response = { type: "text", text: "我不明白您的意思。" }; // 其他情況的預設回應
    }

    return client.replyMessage(event.replyToken, [response]);
  }

  return Promise.resolve(null);
}

function handleFollow(event) {
  // 處理關注事件
  // ...
  return Promise.resolve(null);
}
