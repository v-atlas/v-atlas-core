export default defineEventHandler(async (event) => {
  return {
    "$ref": "#/definitions/SpotifyPlaylistItem",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "definitions": {
      "SpotifyPlaylistItem": {
        "additionalProperties": false,
        "properties": {
          "collaborative": {
            "type": "boolean"
          },
          "description": {
            "type": "string"
          },
          "external_urls": {
            "additionalProperties": false,
            "properties": {
              "spotify": {
                "type": "string"
              }
            },
            "required": [
              "spotify"
            ],
            "type": "object"
          },
          "href": {
            "type": "string"
          },
          "id": {
            "type": "string"
          },
          "images": {
            "items": {
              "additionalProperties": false,
              "properties": {
                "height": {
                  "type": "number"
                },
                "url": {
                  "type": "string"
                },
                "width": {
                  "type": "number"
                }
              },
              "required": [
                "url",
                "height",
                "width"
              ],
              "type": "object"
            },
            "type": "array"
          },
          "name": {
            "type": "string"
          },
          "owner": {
            "additionalProperties": false,
            "properties": {
              "display_name": {
                "type": "string"
              },
              "external_urls": {
                "additionalProperties": false,
                "properties": {
                  "spotify": {
                    "type": "string"
                  }
                },
                "required": [
                  "spotify"
                ],
                "type": "object"
              },
              "followers": {
                "additionalProperties": false,
                "properties": {
                  "href": {
                    "type": "string"
                  },
                  "total": {
                    "type": "number"
                  }
                },
                "required": [
                  "href",
                  "total"
                ],
                "type": "object"
              },
              "href": {
                "type": "string"
              },
              "id": {
                "type": "string"
              },
              "type": {
                "type": "string"
              },
              "uri": {
                "type": "string"
              }
            },
            "required": [
              "external_urls",
              "followers",
              "href",
              "id",
              "type",
              "uri",
              "display_name"
            ],
            "type": "object"
          },
          "public": {
            "type": "boolean"
          },
          "snapshot_id": {
            "type": "string"
          },
          "tracks": {
            "additionalProperties": false,
            "properties": {
              "href": {
                "type": "string"
              },
              "total": {
                "type": "number"
              }
            },
            "required": [
              "href",
              "total"
            ],
            "type": "object"
          },
          "type": {
            "type": "string"
          },
          "uri": {
            "type": "string"
          }
        },
        "required": [
          "collaborative",
          "description",
          "external_urls",
          "href",
          "id",
          "images",
          "name",
          "owner",
          "public",
          "snapshot_id",
          "tracks",
          "type",
          "uri"
        ],
        "type": "object"
      }
    }
  }
})
