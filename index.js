const functions = require("@google-cloud/functions-framework");
const line = require("@line/bot-sdk");
const {
  shoppingMessage,
  menuMessage,
  flexMessage,
  datetimeMessage,
  imageCarouselMessage,
  imagemapMessage,
  carouselMessage,
  confirmMessage,
  buttonsMessage,
} = require("./libs/flexMessages");
const path = require("path");
const fs = require("fs");
const cp = require("child_process");
const util = require("util");
const { pipeline } = require("stream");

let baseURL =
  "https://raw.githubusercontent.com/nickburrows/google-cloud-test/main";

const config = {
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.LINE_CHANNEL_SECRET,
};

const client = new line.messagingApi.MessagingApiClient({
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
});

const blobClient = new line.messagingApi.MessagingApiBlobClient({
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
});

const lineMiddleware = line.middleware(config);

functions.http("callback", (req, res) => {
  if (req.body.destination) {
    console.log("Destination User ID: " + req.body.destination);
  }

  // req.body.events should be an array of events
  if (!Array.isArray(req.body.events)) {
    return res.status(500).end();
  }

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

// simple reply function
const replyText = (token, texts) => {
  texts = Array.isArray(texts) ? texts : [texts];
  return client.replyMessage({
    replyToken: token,
    messages: texts.map(text => ({ type: "text", text })),
  });
};

// callback function to handle a single event
function handleEvent(event) {
  if (event.replyToken && event.replyToken.match(/^(.)\1*$/)) {
    return console.log("Test hook recieved: " + JSON.stringify(event.message));
  }

  switch (event.type) {
    case "message":
      const message = event.message;
      switch (message.type) {
        case "text":
          return handleText(message, event.replyToken, event.source);
        case "image":
          return handleImage(message, event.replyToken);
        case "video":
          return handleVideo(message, event.replyToken);
        case "audio":
          return handleAudio(message, event.replyToken);
        case "location":
          return handleLocation(message, event.replyToken);
        case "sticker":
          return handleSticker(message, event.replyToken);
        default:
          throw new Error(`Unknown message: ${JSON.stringify(message)}`);
      }

    case "follow":
      return replyText(event.replyToken, "Got followed event");

    case "unfollow":
      return console.log(`Unfollowed this bot: ${JSON.stringify(event)}`);

    case "join":
      return replyText(event.replyToken, `Joined ${event.source.type}`);

    case "leave":
      return console.log(`Left: ${JSON.stringify(event)}`);

    case "postback":
      let data = event.postback.data;
      if (data === "DATE" || data === "TIME" || data === "DATETIME") {
        data += `(${JSON.stringify(event.postback.params)})`;
      }
      return replyText(event.replyToken, `Got postback: ${data}`);

    case "beacon":
      return replyText(event.replyToken, `Got beacon: ${event.beacon.hwid}`);

    default:
      throw new Error(`Unknown event: ${JSON.stringify(event)}`);
  }
}

function handleText(message, replyToken, source) {
  const buttonsImageURL = `${baseURL}/static/buttons/1040.jpg`;

  switch (message.text) {
    case "profile":
      if (source.userId) {
        return client
          .getProfile(source.userId)
          .then(profile =>
            replyText(replyToken, [
              `Display name: ${profile.displayName}`,
              `Status message: ${profile.statusMessage}`,
            ])
          );
      } else {
        return replyText(
          replyToken,
          "Bot can't use profile API without user ID"
        );
      }
    case "buttons":
      return client.replyMessage(buttonsMessage(replyToken, buttonsImageURL));
    case "confirm":
      return client.replyMessage(confirmMessage(replyToken));
    case "carousel":
      return client.replyMessage(carouselMessage(replyToken, buttonsImageURL));
    case "image carousel":
      return client.replyMessage(
        imageCarouselMessage(replyToken, buttonsImageURL)
      );
    case "flex":
      return client.replyMessage(flexMessage(replyToken));
    case "menu":
      return client.replyMessage(menuMessage(replyToken));
    case "datetime":
      return client.replyMessage(datetimeMessage(replyToken));
    case "imagemap":
      return client.replyMessage(imagemapMessage(replyToken, baseURL));
    case "bye":
      switch (source.type) {
        case "user":
          return replyText(replyToken, "Bot can't leave from 1:1 chat");
        case "group":
          return replyText(replyToken, "Leaving group").then(() =>
            client.leaveGroup(source.groupId)
          );
        case "room":
          return replyText(replyToken, "Leaving room").then(() =>
            client.leaveRoom(source.roomId)
          );
      }
    default:
      console.log(`Echo message to ${replyToken}: ${message.text}`);
      return replyText(replyToken, message.text);
  }
}

async function handleImage(message, replyToken) {
  function sendReply(originalContentUrl, previewImageUrl) {
    return client.replyMessage({
      replyToken,
      messages: [
        {
          type: "image",
          originalContentUrl,
          previewImageUrl,
        },
      ],
    });
  }

  if (message.contentProvider.type === "line") {
    const downloadPath = path.join(
      __dirname,
      "downloaded",
      `${message.id}.jpg`
    );
    const previewPath = path.join(
      __dirname,
      "downloaded",
      `${message.id}-preview.jpg`
    );

    await downloadContent(message.id, downloadPath);

    // ImageMagick is needed here to run 'convert'
    // Please consider security and performance by yourself
    cp.execSync(
      `convert -resize 240x jpeg:${downloadPath} jpeg:${previewPath}`
    );

    sendReply(
      baseURL + "/downloaded/" + path.basename(downloadPath),
      baseURL + "/downloaded/" + path.basename(previewPath)
    );
  } else if (message.contentProvider.type === "external") {
    sendReply(
      message.contentProvider.originalContentUrl,
      message.contentProvider.previewImageUrl
    );
  }
}

async function handleVideo(message, replyToken) {
  console.log(`handleVideo: ${replyToken} ${JSON.stringify(message)}}`);

  function sendReply(originalContentUrl, previewImageUrl) {
    return client.replyMessage({
      replyToken,
      messages: [
        {
          type: "video",
          originalContentUrl,
          previewImageUrl,
        },
      ],
    });
  }

  if (message.contentProvider.type === "line") {
    const downloadPath = path.join(
      __dirname,
      "downloaded",
      `${message.id}.mp4`
    );
    const previewPath = path.join(
      __dirname,
      "downloaded",
      `${message.id}-preview.jpg`
    );

    await downloadContent(message.id, downloadPath);

    // FFmpeg and ImageMagick is needed here to run 'convert'
    // Please consider security and performance by yourself
    cp.execSync(`convert mp4:${downloadPath}[0] jpeg:${previewPath}`);

    sendReply(
      baseURL + "/downloaded/" + path.basename(downloadPath),
      baseURL + "/downloaded/" + path.basename(previewPath)
    );
  } else if (message.contentProvider.type === "external") {
    sendReply(
      message.contentProvider.originalContentUrl,
      message.contentProvider.previewImageUrl
    );
  }
}

async function handleAudio(message, replyToken) {
  function sendReply(originalContentUrl) {
    return client.replyMessage({
      replyToken,
      messages: [
        {
          type: "audio",
          originalContentUrl,
          duration: message.duration,
        },
      ],
    });
  }

  if (message.contentProvider.type === "line") {
    const downloadPath = path.join(
      __dirname,
      "downloaded",
      `${message.id}.m4a`
    );

    await downloadContent(message.id, downloadPath);
    sendReply(baseURL + "/downloaded/" + path.basename(downloadPath));
  } else {
    sendReply(message.contentProvider.originalContentUrl);
  }
}

async function downloadContent(messageId, downloadPath) {
  const stream = await blobClient.getMessageContent(messageId);

  const pipelineAsync = util.promisify(pipeline);

  const writable = fs.createWriteStream(downloadPath);
  await pipelineAsync(stream, writable);
}

function handleLocation(message, replyToken) {
  return client.replyMessage({
    replyToken,
    messages: [
      {
        type: "location",
        title: message.title,
        address: message.address,
        latitude: message.latitude,
        longitude: message.longitude,
      },
    ],
  });
}

function handleSticker(message, replyToken) {
  return client.replyMessage({
    replyToken,
    messages: [
      {
        type: "sticker",
        packageId: message.packageId,
        stickerId: message.stickerId,
      },
    ],
  });
}
