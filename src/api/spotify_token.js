import React from "react";
import base64 from "react-native-base64";

const apiPrefix = "https://accounts.spotify.com/api";
const client_id = "3e2096a7b87c42098402ca0a6a90ed27";
const client_secret = "bccb0aedf8c04c9a882745845a59c478";

const base64credentials = base64.encode(client_id + ":" + client_secret);

export const getSpotifyToken = async () => {
  const res = await fetch(`${apiPrefix}/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${base64credentials} `,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });
  const json = await res.json();
  return  json
 
};
