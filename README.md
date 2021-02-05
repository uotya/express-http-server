### Setup
```
npm install
```

### Run Server
```zsh
node serve.js
```

### Change Domain
ngrok がインストールされている必要があります。
```
ngrok http 8081
```

### Prepare
`public/index.html` の `img` 要素の `src` 属性の値を変更する
```html
<!-- 6fecee859654 を変更する -->
<img src="https://6fecee859654.ngrok.io/minecraft.png" alt="">
```

### Result
`http://localhost:8080/` にアクセスすると、2つの異なるドメインからクッキーが保存されている

<img width="1287" alt="cookie" src="https://user-images.githubusercontent.com/50517283/107088795-db37e080-6840-11eb-9749-b5767ce5c409.png">
