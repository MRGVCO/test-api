const express = require("express");
const router = express.Router();

router.get('/all/:businessId', async (req, res) => {
  const amenity = await req.context.models.Amenity.findAll({where:{business_id :  req.params.businessId}});
  return res.send(amenity);
});



router.post('/add', async (req, res) => {
  const amenity = await req.context.models.Amenity.create({
    business_id: req.body.business_id,
    type: req.body.type,
    name: req.body.name,
    created: (new Date()).toISOString()
  });
  return res.send(amenity);
});




router.delete('/delete/:amenityId', async (req, res) => {
  const result = await req.context.models.Amenity.destroy({
    where: { id: req.params.amenityId },
  });
  return res.send(true);
});




module.exports = router;
