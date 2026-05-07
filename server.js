const express = require("express");
const axios = require("axios");

const app = express();

const CLIENT_ID = "YOUR_CLIENT_ID";
const CLIENT_SECRET = "YOUR_CLIENT_SECRET";

// جلب token
async function getToken() {
  const res = await axios.post(
    "https://accounts.spotify.com/api/token",
    "grant_type=client_credentials",
    {
      headers: {
        "Authorization":
          "Basic " + Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }
  );

  return res.data.access_token;
}

// API route
app.get("/artist/:id", async (req, res) => {
  const token = await getToken();

  const artist = await axios.get(
    `https://api.spotify.com/v1/artists/${req.params.id}`,
    {
      headers: {
        Authorization: "Bearer " + token
      }
    }
  );

  res.json(artist.data);
});

app.listen(3000, () => console.log("Server running"));
