const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const { ArticleRouter } = require('./router');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/article', ArticleRouter);

app.listen(3001, (err) => {
  if (err) {
    throw err;
  }

  console.log('服务启动成功，监听端口3001。');
});
