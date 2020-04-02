const router = require('express').Router();
const ArticleService = require('../../service/article');
const articleService = new ArticleService();

router.post('/list', (req, res) => {
  const data = articleService.getList();

  res.json({
    result: true,
    code: 200,
    data,
  });
});

router.post('/detail', (req, res) => {
  const id = req.body.id;

  if (id) {

    const result = articleService.getDetailById(id);
    
    if (!result) {

      res.json({
        result: true,
        code: 100,
        message: '未查询到数据',
      });
      
    } else {

      res.json({
        result: true,
        code: 200,
        data: result,
      });

    }

  } else {

    res.json({
      result: true,
      code: 101,
      message: '缺少id参数',
    });

  }
});

module.exports = router;
