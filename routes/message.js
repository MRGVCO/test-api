const express = require("express");
const router = express.Router();

router.get('/', async (req, res) => {
  const messages = await req.context.models.Message.findAll();
  return res.send(messages);
});

router.get('/:messageId', async (req, res) => {
  const message = await req.context.models.Message.findById(
    req.params.messageId,
  );
  return res.send(message);
});

router.get('/userId/:userId', async (req, res) => {
  const message = await req.context.models.Message.findAll({ where: { userId: req.params.userId }});
  return res.send(message);
});

router.post('/', async (req, res) => {
  console.log('req', req.body)
  const message = await req.context.models.Message.create({
    text: req.body.text,
    userId: req.body.userId,
  });
  return res.send(message);
});

router.put('/:messageId', async (req, res)  => {
 const message = await req.context.models.Message.update({text: req.body.text},{where:{id :  req.params.messageId}});
 return res.send(message);
})


router.delete('/:messageId', async (req, res) => {
  const result = await req.context.models.Message.destroy({
    where: { id: req.params.messageId },
  });

  return res.send(true);
});

module.exports = router;
