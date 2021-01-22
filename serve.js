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
  if (req.is('application/json')) {
    res.status(201).send(req.body);
  } else {
    const error = new Error('Invalid Content-Type');
    console.log(error);
    res.status(400).send({ error: error.message });
  }
});

// HTTP サーバを起動する
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});