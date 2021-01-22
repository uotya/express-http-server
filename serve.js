const express = require("express");
const app  = express();
const port = 8080;

// POST された JSON を req.body で操作可能にする
app.use(express.json());

// ルーティングの設定
app.get("/", (req, res) => {
  res.json({ "text": "hello world" })
});
app.post('/', (req, res) => {
  res.send(req.body);
});

// HTTP サーバを起動する
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});