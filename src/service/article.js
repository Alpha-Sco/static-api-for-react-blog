const fs = require('fs');
const path = require('path');
const articleData = require('../data/article/list');

class ArticleService {
  getList() {
    return articleData;
  }

  getDetailById(id) {
    const fullPath = path.resolve(__dirname, `../data/article/detail/${id}.md`);

    const result = this._getArticleInfoById(id);
    if (!result) {
      return false;
    }

    let data = null;
    try {
      data = fs.readFileSync(fullPath, 'utf8');
    } catch {
      data = false;
    }

    result.content = data;

    return result;
  }

  _getArticleInfoById(id) {
    const list = this.getList();

    const article = list.filter((article) => {
      return article.id === parseInt(id, 10);
    });

    if (article.length > 0) {
      return {
        id: article[0].id,
        author: article[0].author,
        createTime: article[0].createTime,
        hot: article[0].hot,
        tag: article[0].tag,
        part: article[0].part,
        title: article[0].title,
        content: '',
      };
    } else {
      return false;
    }
  }
}

module.exports = ArticleService;
