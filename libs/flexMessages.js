function shoppingMessage(replyToken) {
  return {
    replyToken,
    messages: [
      {
        "type": "flex",
        "altText": "a menu Flex Message",
        "contents": {
          "type": "carousel",
          "contents": [
            {
              "type": "bubble",
              "hero": {
                "type": "image",
                "size": "full",
                "aspectRatio": "20:13",
                "aspectMode": "cover",
                "url":
                  "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_5_carousel.png",
              },
              "body": {
                "type": "box",
                "layout": "vertical",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "Arm Chair, White",
                    "wrap": true,
                    "weight": "bold",
                    "size": "xl",
                  },
                  {
                    "type": "box",
                    "layout": "baseline",
                    "contents": [
                      {
                        "type": "text",
                        "text": "$49",
                        "wrap": true,
                        "weight": "bold",
                        "size": "xl",
                        "flex": 0,
                      },
                      {
                        "type": "text",
                        "text": ".99",
                        "wrap": true,
                        "weight": "bold",
                        "size": "sm",
                        "flex": 0,
                      },
                    ],
                  },
                ],
              },
              "footer": {
                "type": "box",
                "layout": "vertical",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "button",
                    "style": "primary",
                    "action": {
                      "type": "uri",
                      "label": "Add to Cart",
                      "uri": "https://linecorp.com",
                    },
                  },
                  {
                    "type": "button",
                    "action": {
                      "type": "uri",
                      "label": "Add to wishlist",
                      "uri": "https://linecorp.com",
                    },
                  },
                ],
              },
            },
            {
              "type": "bubble",
              "hero": {
                "type": "image",
                "size": "full",
                "aspectRatio": "20:13",
                "aspectMode": "cover",
                "url":
                  "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_6_carousel.png",
              },
              "body": {
                "type": "box",
                "layout": "vertical",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "Metal Desk Lamp",
                    "wrap": true,
                    "weight": "bold",
                    "size": "xl",
                  },
                  {
                    "type": "box",
                    "layout": "baseline",
                    "flex": 1,
                    "contents": [
                      {
                        "type": "text",
                        "text": "$11",
                        "wrap": true,
                        "weight": "bold",
                        "size": "xl",
                        "flex": 0,
                      },
                      {
                        "type": "text",
                        "text": ".99",
                        "wrap": true,
                        "weight": "bold",
                        "size": "sm",
                        "flex": 0,
                      },
                    ],
                  },
                  {
                    "type": "text",
                    "text": "Temporarily out of stock",
                    "wrap": true,
                    "size": "xxs",
                    "margin": "md",
                    "color": "#ff5551",
                    "flex": 0,
                  },
                ],
              },
              "footer": {
                "type": "box",
                "layout": "vertical",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "button",
                    "flex": 2,
                    "style": "primary",
                    "color": "#aaaaaa",
                    "action": {
                      "type": "uri",
                      "label": "Add to Cart",
                      "uri": "https://linecorp.com",
                    },
                  },
                  {
                    "type": "button",
                    "action": {
                      "type": "uri",
                      "label": "Add to wish list",
                      "uri": "https://linecorp.com",
                    },
                  },
                ],
              },
            },
            {
              "type": "bubble",
              "body": {
                "type": "box",
                "layout": "vertical",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "button",
                    "flex": 1,
                    "gravity": "center",
                    "action": {
                      "type": "uri",
                      "label": "See more",
                      "uri": "https://linecorp.com",
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  };
}

function menuMessage(replyToken) {
  return {
    replyToken,
    messages: [
      {
        "type": "flex",
        "altText": "a menu Flex Message",
        "contents": {
          "type": "bubble",
          "hero": {
            "type": "image",
            "url":
              "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_2_restaurant.png",
            "size": "full",
            "aspectRatio": "20:13",
            "aspectMode": "cover",
            "action": {
              "type": "uri",
              "uri": "https://linecorp.com",
            },
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "spacing": "md",
            "action": {
              "type": "uri",
              "uri": "https://linecorp.com",
            },
            "contents": [
              {
                "type": "text",
                "text": "Brown's Burger",
                "size": "xl",
                "weight": "bold",
              },
              {
                "type": "box",
                "layout": "vertical",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "box",
                    "layout": "baseline",
                    "contents": [
                      {
                        "type": "icon",
                        "url":
                          "https://scdn.line-apps.com/n/channel_devcenter/img/fx/restaurant_regular_32.png",
                      },
                      {
                        "type": "text",
                        "text": "$10.5",
                        "weight": "bold",
                        "margin": "sm",
                        "flex": 0,
                      },
                      {
                        "type": "text",
                        "text": "400kcl",
                        "size": "sm",
                        "align": "end",
                        "color": "#aaaaaa",
                      },
                    ],
                  },
                  {
                    "type": "box",
                    "layout": "baseline",
                    "contents": [
                      {
                        "type": "icon",
                        "url":
                          "https://scdn.line-apps.com/n/channel_devcenter/img/fx/restaurant_large_32.png",
                      },
                      {
                        "type": "text",
                        "text": "$15.5",
                        "weight": "bold",
                        "margin": "sm",
                        "flex": 0,
                      },
                      {
                        "type": "text",
                        "text": "550kcl",
                        "size": "sm",
                        "align": "end",
                        "color": "#aaaaaa",
                      },
                    ],
                  },
                ],
              },
              {
                "type": "text",
                "text": "Sauce, Onions, Pickles, Lettuce & Cheese",
                "wrap": true,
                "color": "#aaaaaa",
                "size": "xxs",
              },
            ],
          },
          "footer": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "button",
                "style": "primary",
                "color": "#905c44",
                "margin": "xxl",
                "action": {
                  "type": "uri",
                  "label": "Add to Cart",
                  "uri": "https://linecorp.com",
                },
              },
            ],
          },
        },
      },
    ],
  };
}

function flexMessage(replyToken) {
  return {
    replyToken,
    messages: [
      {
        "type": "flex",
        "altText": "This is a Flex Message",
        "contents": {
          "type": "bubble",
          "header": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "Flex Message Corp",
                "color": "#FFFFFF",
                "weight": "bold",
              },
            ],
          },
          "hero": {
            "type": "image",
            "url":
              "https://developers.line.biz/media/messaging-api/using-flex-message-simulator/mary.png",
            "size": "xl",
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "Mary Smith",
                "size": "xl",
                "weight": "bold",
                "align": "center",
              },
              {
                "type": "text",
                "text": "Founder at Flex Message Corp",
                "align": "center",
              },
              {
                "type": "separator",
                "margin": "md",
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "uri",
                      "label": "Visit our website",
                      "uri": "https://example.com",
                    },
                    "style": "link",
                  },
                  {
                    "type": "button",
                    "action": {
                      "type": "uri",
                      "label": "Register with us",
                      "uri": "https://liff.line.me/xxxxx-xxxxx/",
                    },
                    "style": "link",
                  },
                ],
                "paddingTop": "10px",
              },
            ],
          },
          "styles": {
            "header": {
              "backgroundColor": "#00B900",
            },
          },
        },
      },
    ],
  };
}

function datetimeMessage(replyToken) {
  return {
    replyToken,
    messages: [
      {
        type: "template",
        altText: "Datetime pickers alt text",
        template: {
          type: "buttons",
          text: "Select date / time !",
          actions: [
            {
              type: "datetimepicker",
              label: "date",
              data: "DATE",
              mode: "date",
            },
            {
              type: "datetimepicker",
              label: "time",
              data: "TIME",
              mode: "time",
            },
            {
              type: "datetimepicker",
              label: "datetime",
              data: "DATETIME",
              mode: "datetime",
            },
          ],
        },
      },
    ],
  };
}

function imageCarouselMessage(replyToken, buttonsImageURL) {
  return {
    replyToken,
    messages: [
      {
        type: "template",
        altText: "Image carousel alt text",
        template: {
          type: "image_carousel",
          columns: [
            {
              imageUrl: buttonsImageURL,
              action: {
                label: "Go to LINE",
                type: "uri",
                uri: "https://line.me",
              },
            },
            {
              imageUrl: buttonsImageURL,
              action: {
                label: "Say hello1",
                type: "postback",
                data: "hello こんにちは",
              },
            },
            {
              imageUrl: buttonsImageURL,
              action: {
                label: "Say message",
                type: "message",
                text: "Rice=米",
              },
            },
            {
              imageUrl: buttonsImageURL,
              action: {
                label: "datetime",
                type: "datetimepicker",
                data: "DATETIME",
                mode: "datetime",
              },
            },
          ],
        },
      },
    ],
  };
}

function imagemapMessage(replyToken, baseURL) {
  return {
    replyToken,
    messages: [
      {
        type: "imagemap",
        baseUrl: `${baseURL}/static/rich`,
        altText: "Imagemap alt text",
        baseSize: { width: 1040, height: 1040 },
        actions: [
          {
            area: { x: 0, y: 0, width: 520, height: 520 },
            type: "uri",
            linkUri: "https://store.line.me/family/manga/en",
          },
          {
            area: { x: 520, y: 0, width: 520, height: 520 },
            type: "uri",
            linkUri: "https://store.line.me/family/music/en",
          },
          {
            area: { x: 0, y: 520, width: 520, height: 520 },
            type: "uri",
            linkUri: "https://store.line.me/family/play/en",
          },
          {
            area: { x: 520, y: 520, width: 520, height: 520 },
            type: "message",
            text: "URANAI!",
          },
        ],
        video: {
          originalContentUrl: `${baseURL}/static/imagemap/video.mp4`,
          previewImageUrl: `${baseURL}/static/imagemap/preview.jpg`,
          area: {
            x: 280,
            y: 385,
            width: 480,
            height: 270,
          },
          externalLink: {
            linkUri: "https://line.me",
            label: "LINE",
          },
        },
      },
    ],
  };
}

function carouselMessage(replyToken, buttonsImageURL) {
  return {
    replyToken,
    messages: [
      {
        type: "template",
        altText: "Carousel alt text",
        template: {
          type: "carousel",
          columns: [
            {
              thumbnailImageUrl: buttonsImageURL,
              title: "hoge",
              text: "fuga",
              actions: [
                {
                  label: "Go to line.me",
                  type: "uri",
                  uri: "https://line.me",
                },
                {
                  label: "Say hello1",
                  type: "postback",
                  data: "hello こんにちは",
                },
              ],
            },
            {
              thumbnailImageUrl: buttonsImageURL,
              title: "hoge",
              text: "fuga",
              actions: [
                {
                  label: "言 hello2",
                  type: "postback",
                  data: "hello こんにちは",
                  text: "hello こんにちは",
                },
                { label: "Say message", type: "message", text: "Rice=米" },
              ],
            },
          ],
        },
      },
    ],
  };
}

function confirmMessage(replyToken) {
  return {
    replyToken,
    messages: [
      {
        type: "template",
        altText: "Confirm alt text",
        template: {
          type: "confirm",
          text: "Do it?",
          actions: [
            { label: "Yes", type: "message", text: "Yes!" },
            { label: "No", type: "message", text: "No!" },
          ],
        },
      },
    ],
  };
}

function buttonsMessage(replyToken, buttonsImageURL) {
  return {
    replyToken,
    messages: [
      {
        type: "template",
        altText: "Buttons alt text",
        template: {
          type: "buttons",
          thumbnailImageUrl: buttonsImageURL,
          title: "My button sample",
          text: "Hello, my button",
          actions: [
            { label: "Go to line.me", type: "uri", uri: "https://line.me" },
            {
              label: "Say hello1",
              type: "postback",
              data: "hello こんにちは",
            },
            {
              label: "言 hello2",
              type: "postback",
              data: "hello こんにちは",
              text: "hello こんにちは",
            },
            { label: "Say message", type: "message", text: "Rice=米" },
          ],
        },
      },
    ],
  };
}

module.exports = {
  shoppingMessage,
  menuMessage,
  flexMessage,
  datetimeMessage,
  imageCarouselMessage,
  imagemapMessage,
  carouselMessage,
  confirmMessage,
  buttonsMessage,
};
