const express = require("express");
const app = express();
const api = require("./api");

//===========================================================================>

app.use(express.json());
app.set("json spaces", 2); //عشان يجيك الرد مفرق اسطر مب كل شي بسطر واحد

const port = process.env.PORT || 3000; //منفذ الخادم
app.use(api);

function getBaseUrl(req) {
  return req.protocol + '://' + req.get('host');
}

// صفحة نمشي بها حاليا
app.get("/", (req, res) => {
    const test = getBaseUrl(req);
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>BK9</title>
    </head>
    <body>
      <h1>Hello World 😂</h1>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

//===========================================================================>

module.exports = app;
