import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../shared/App";

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.send(`
      <!DOCTYPE html>
      <head>
        <title>Universal Reacl</title>
        <link rel="stylesheet" href="/css/main.css">
        <script src="/bundle.js" defer></script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
            name="description"
            content="Web site created using create-react-app"
        />
        <link rel="apple-touch-icon" />
        <!--
          manifest.json provides metadata used when your web app is installed on a
          user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
        -->
        <link rel="manifest" href="../public/manifest.json" />
        <title>React App</title>
      </head>
      <body>
        <div id="root">${renderToString(<App />)}</div>
      </body>
    </html>
  `);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening");
});
