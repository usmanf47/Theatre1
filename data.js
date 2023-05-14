var APP_DATA = {
  "scenes": [
    {
      "id": "0-1",
      "name": "1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.9240974965637676,
        "pitch": 0.2843615939438031,
        "fov": 1.3934346732050444
      },
      "linkHotspots": [
        {
          "yaw": -0.6902363878678095,
          "pitch": 0.053865600241113754,
          "rotation": 0,
          "target": "1-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-2",
      "name": "2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.24116666414151133,
        "pitch": 0.089012389326518,
        "fov": 1.3934346732050444
      },
      "linkHotspots": [
        {
          "yaw": -0.7708589139147612,
          "pitch": 0.0605918865413706,
          "rotation": 0,
          "target": "0-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Theatre",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
