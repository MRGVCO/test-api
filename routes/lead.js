const express = require("express");
const router = express.Router();

router.get('/all/:businessId', async (req, res) => {
  const lead = await req.context.models.Lead.findAll({where:{business_id :  req.params.businessId}});
  return res.send(lead);
});

router.get('/tacos', async (req, res) => {
  return res.send('tacos');
});




router.post('/add', async (req, res) => {
  const lead = await req.context.models.Lead.create({
    business_id: req.body.businessId,
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    reason: req.body.reason,
    residence: req.body.residence,
    progress: 0,
    created: (new Date()).toISOString()
  });
  return res.send(lead);
});




router.delete('/delete/:leadId', async (req, res) => {
  const result = await req.context.models.Lead.destroy({
    where: { id: req.params.leadId },
  });
  return res.send(true);
});




module.exports = router;
