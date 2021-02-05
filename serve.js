const express = require("express");

// app の HTTP サーバを起動する
const app = express();
app.use(express.static('public', {
  setHeaders: (res, path, stat) => {
    res.cookie('cookie', 'SampleSite', {
      httpOnly: true,
    });
  },
}));
app.listen(8080, () => {
  console.log('listening at http://localhost:8080');
});

// image の HTTP サーバーを起動する
const image = express()
image.use(express.static('public-image', {
  setHeaders: (res, path, stat) => {
    res.cookie('cookie', 'image', {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
    });
  },
}))
image.listen(8081, () => {
  console.log('listening at http://localhost:8081');
})