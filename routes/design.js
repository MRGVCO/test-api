const express = require("express");
const router = express.Router();

router.get('/get/:businessId', async (req, res) => {
  const lead = await req.context.models.Design.findAll({where:{business_id :  req.params.businessId}});
  return res.send(lead);
});


router.post('/create', async (req, res) => {


  console.log('this is req', req)
  console.log('this is res', res)


  const data = await req.context.models.Design.create({
    business_id: req.body.businessId,
    primary: req.body.primary,
    secondary: req.body.secondary,
    header: req.body.header,
    copy : req.body.copy,
    template: req.body.template,
    created: (new Date()).toISOString(),
    modified: (new Date()).toISOString()
  });
  return res.send(data);
});


router.post('/update/:businessId', async (req, res) => {
  console.log('this is req', req)
  console.log('this is res', res)
  const design = await req.context.models.Design.update({
    primary: req.body.primaryColor,
    secondary: req.body.secondaryColor,
    header: req.body.header,
    copy: req.body.copy,
    template: req.body.template,
    modified: (new Date()).toISOString()
  },
  {where:{business_id :  req.params.businessId}});
  return res.send(design);
});


module.exports = router;
